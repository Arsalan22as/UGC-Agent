# UGC-Agent

UGC-Agent is an AI-powered web application designed to automate budget allocation and provide actionable recommendations for educational institutions. Leveraging advanced language models, it streamlines the process of analyzing institutional data, allocating budgets based on multiple criteria, and generating insightful reports.

---

## Demo

Watch the demo by clicking on the video below to see UGC-Agent in action:

[![Watch the video](https://img.youtube.com/vi/IHPYVnp3aXg/hqdefault.jpg)](https://youtu.be/IHPYVnp3aXg)

---

## Features

- **Data Upload:** Supports uploading institution data in CSV or JSON formats for flexible integration.
- **Automated Budget Allocation:** Calculates optimal budget allocations using a weighted scoring system across key criteria such as infrastructure, faculty, research, student metrics, and placements.
- **AI-Generated Recommendations:** Utilizes LLMs to provide tailored, actionable recommendations for each institution to improve their scores and funding prospects.
- **Comprehensive Reporting:** Generates downloadable reports in both PDF and DOCX formats, including detailed tables and recommendations.
- **Secure API Key Management:** Keeps sensitive API keys out of source code by using environment variables via a `.env` file.
- **User-Friendly Interface:** Simple web interface for uploading data, viewing results, and downloading reports.

---

## Getting Started

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ugc-agent.git
    cd ugc-agent
    ```

2. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the project root directory.
    - Add your Groq API key:
      ```
      GROQ_API_KEY=your_groq_api_key_here
      ```

4. **Run the application:**
    ```bash
    python app.py
    ```

5. **Access the web interface:**
    - Open your browser and go to [http://localhost:5000](http://localhost:5000)

---

## Usage

1. **Upload Data:**
   - Click the upload button and select your institution data file (CSV or JSON).
2. **View Results:**
   - The application will process the data, allocate budgets, and display results in a table.
3. **Get Recommendations:**
   - For each institution, view AI-generated recommendations to improve their scores and funding.
4. **Download Reports:**
   - Download comprehensive reports in PDF or DOCX format for record-keeping or sharing.

---

## Customization

- **Scoring Criteria:** You can adjust the weights or add new criteria in the code to fit your institution's specific needs.
- **Report Templates:** Modify the PDF/DOCX generation functions to customize the look and content of your reports.
- **API Integration:** Easily switch to a different LLM provider by updating the API endpoint and key in your `.env` file and code.

---

## Troubleshooting

- **API Key Errors:** Ensure your `.env` file is present and contains a valid API key.
- **Dependency Issues:** Run `pip install -r requirements.txt` to ensure all dependencies are installed.
- **File Upload Problems:** Check that your data file is in the correct format (CSV or JSON) and follows the expected schema.

---


## Contact

For questions, suggestions, or contributions, please open an issue or contact the maintainer at [your.email@example.com](siddiquiarsalan22as@gmail.com).
