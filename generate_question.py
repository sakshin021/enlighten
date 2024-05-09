
# Import libraries
from flask import Flask, request, jsonify
import PyPDF2
import spacy
from spacy.matcher import PhraseMatcher
from spacy_langdetect import LanguageDetector

# Load English language model
nlp = spacy.load("en_core_web_sm")

# Initialize Flask app
app = Flask(__name__)

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page_num in range(len(list(reader.pages))):
            page = reader.pages[page_num]
            text += page.extract_text()
    return text

# Function to extract relevant information from CV
def extract_information_from_cv(cv_text):
    # Process text with SpaCy
    doc = nlp(cv_text)

    # Define patterns for matching
    job_description_patterns = ["job description", "job responsibilities", "required skills", "qualifications"]
    matcher = PhraseMatcher(nlp.vocab)
    matcher.add("Job_Description", None, *[nlp(text) for text in job_description_patterns])

    # Find matches
    matches = matcher(doc)

    # Extract sentences containing job description patterns
    job_description_sentences = []
    for match_id, start, end in matches:
        span = doc[start:end]
        sentence = span.sent.text
        job_description_sentences.append(sentence)

    return job_description_sentences

# Function to generate questions based on extracted information
def generate_questions(job_description_sentences):
    questions = []
    for sentence in job_description_sentences:
        # Simple rule-based question generation
        if "job description" in sentence.lower():
            questions.append("What are the job responsibilities?")
        elif "required skills" in sentence.lower():
            questions.append("What skills are required for the job?")
        elif "qualifications" in sentence.lower():
            questions.append("What qualifications are required for the job?")
        else:
            questions.append("Can you provide more details about this?")
    return questions

# Define endpoint to receive PDF file and return generated questions
@app.route('/process_cv', methods=['POST'])
def process_cv():
    # Get PDF file from request
    pdf_file = request.files['file']

    # Extract text from PDF
    cv_text = extract_text_from_pdf(pdf_file)

    # Extract relevant information from CV
    job_description_sentences = extract_information_from_cv(cv_text)

    # Generate questions based on extracted information
    questions = generate_questions(job_description_sentences)

    # Return generated questions
    return jsonify(questions)

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
