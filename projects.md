---
layout: list
title: Projects
permalink: /projects/
---

# My Projects

Here are some of the projects I have worked on. Each project's description and README are included below.
## Intelligent Chatbot for Aviation Insights
[Visit on Github](https://github.com/ArbbazAlif/UTA-X-TripAI-Case-Competition/tree/main)

### README:
# Intelligent Chatbot for Aviation Insights

This project presents an end-to-end solution for a cloud-based chatbot that can handle document-based and predictive queries. It was developed as part of a student competition focused on aviation data, with an emphasis on innovation, AI, and sustainability.

## ✈️ Project Goals

- Build a document-aware chatbot that can answer user queries like “What’s on page 10?”
- Use machine learning to predict aviation trends (e.g., flight counts, emissions)
- Generate dashboards to visualize insights (e.g., fuel consumption, seasonal trends)
- Deploy the solution on AWS cloud infrastructure

## 🏆 Competition Context

> “Sustainability in aviation isn't just a challenge—it's an opportunity to innovate.”

Over the last week, our team *Innovate Y* represented **Naveen Jindal School of Management, UT Dallas**, at the **9th Annual Business Analytics Symposium** hosted by *The University of Texas at Arlington - College of Business*. Competing against 40+ teams from 7 universities, we secured **3rd place**! 🎉

### The Challenge (Sponsored by TripAI Technologies):
Accelerate sustainability in the aviation industry using analytics and cloud technologies.

### Our Solution:
- 🚀 **Interactive Aviation Assistant**: A chatbot powered by **LangChain** and **Retrieval-Augmented Generation (RAG)** that helps optimize fuel usage and reduce CO₂ emissions through context-aware analytics.
- ☁️ **Cloud Deployment Strategy**: Designed a scalable **AWS architecture** to showcase the potential for real-world productization.

## 📂 Key Files

- `Chatbot_code.py`: Lambda handler for routing and inference
- `Feature_Selection.ipynb`: Feature engineering and model building
- `UTA_EDA.ipynb`: Exploratory Data Analysis of aviation data
- `Student Competition - Problem Statement.docx`: Problem description from the organizers

## 🧠 Technologies Used

- AWS: S3, Lex, Lambda, Kendra, RDS, SageMaker, Glue, QuickSight
- Python: Pandas, NumPy, Sklearn
- Jupyter Notebooks: Data analysis, model training
- Generative AI: LangChain and Retrieval-Augmented Generation (RAG)

## 🚀 Getting Started

1. Clone the repo and open notebooks in Jupyter:
```bash
git clone https://github.com/yourusername/aws-aviation-chatbot.git
cd aws-aviation-chatbot
jupyter notebook
```

2. Run `Feature_Selection.ipynb` to train and evaluate the ML model.

3. Deploy `Chatbot_code.py` in AWS Lambda and connect it to Amazon Lex.

## 📊 Outputs

- Trend visualizations (flights across holidays/seasons)
- Heatmaps of emissions and fuel burn
- Dashboard via Amazon QuickSight
- Chatbot handling both predictive and document-based queries

## ⚖️ License

This repository is released under the MIT License.

## 🙌 Acknowledgements

- University Collaboration on Aviation AI Challenge
- AWS Education Credits Program

---

## AI-Powered Injury Intelligence Dashboard

[Visit on Github](https://github.com/ArbbazAlif/AI-Powered-Injury-Intelligence-Dashboard/tree/main)

### README:

# AI-Powered Injury Intelligence Dashboard

*Uses NLP and interactive dashboards to analyze OSHA severe hand injury reports in the manufacturing industry.* This project leverages natural language processing and data visualization to transform raw incident reports into actionable safety insights for manufacturing companies.

## Technologies Used

- **Python** – Base programming language for data processing and analysis.  
- **Streamlit** – Open-source web framework for building the interactive dashboard UI.  
- **spaCy** – Industrial-strength NLP library for extracting information from injury report text.  
- **scikit-learn** – Machine learning library used for modeling and clustering injury data patterns.  
- **Pandas** – Data manipulation library for cleaning data and aggregating statistics.  
- **Plotly** – Interactive graphing library for visualizations like charts and heatmaps.

## Features

- **NLP-Powered Data Extraction:** Automatically extracts key details from OSHA injury descriptions using spaCy (e.g. injury causes, affected body parts, locations).  
- **Interactive Dashboard Filters:** Provides intuitive filters (by date, company, injury type, etc.) to drill down into specific subsets of incidents.  
- **Heatmaps & Visual Analytics:** Visualizes injury occurrences with heatmaps and charts (e.g. time-of-incident heatmaps or geographic maps) to identify trends and hotspots.  
- **Company Profiling:** Generates profiles for each company in the dataset, highlighting total incidents, common injury types, and other notable patterns.

## Use Case

This dashboard is designed for EHS (Environmental Health & Safety) teams and safety managers in manufacturing. By analyzing OSHA severe hand injury reports, the tool helps identify patterns and root causes of workplace accidents. Safety teams can discover which processes or machinery lead to frequent injuries, or detect spikes in incidents during certain time periods. These insights enable data-driven decisions to implement targeted prevention strategies and improve workplace safety.

## Project Structure

- **data/** – Contains the OSHA severe injury dataset and any intermediate or processed data files.  
- **notebooks/** – Jupyter notebooks for data exploration, NLP model development, and analysis.  
- **dashboard/** – Streamlit app source code for the dashboard (Python scripts, data loading, and UI components).  
- **requirements.txt** – List of Python dependencies needed to run the project.

## Getting Started

To run the **AI-Powered Injury Intelligence Dashboard** locally, follow these steps:

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/ArbbazAlif/AI-Powered-Injury-Intelligence-Dashboard.git
   ```
2. **Install dependencies:**  
   Navigate into the project directory and install required packages:  
   ```bash
   pip install -r requirements.txt
   ```
3. **Launch the Streamlit app:**  
   Run the dashboard using Streamlit:  
   ```bash
   streamlit run dashboard/app.py
   ```  
   This will start the web app and open the interactive dashboard in your browser.  
   
*Prerequisites:* Ensure you have **Python 3.x** and **pip** installed. It’s recommended to use a virtual environment for a clean setup.

## Achievements

- 🥉 **3rd Place** (out of 35 teams) in the **DataWhiz Case Study + Hackathon** hosted by Envision UTD (Safety Excellence Group). This project was recognized for its innovative approach to workplace safety analytics.

## Contact

For any questions or collaboration inquiries, please reach out to **Arbbaz Alif Abdul Shafeeq** on [LinkedIn](https://www.linkedin.com/in/arbbaz-alif-profile/).

---

## Sentiment Analysis of Tweets

[Visit on Github](https://github.com/ArbbazAlif/Sentimental-Analysis-of-Tweets)

### README

# Sentiment Analysis of Tweets

This project performs sentiment analysis on a dataset of tweets using Natural Language Processing (NLP) techniques. The notebook includes data preprocessing, visualization, feature extraction using TF-IDF, and classification using machine learning algorithms such as Logistic Regression and Naive Bayes.

## 🧪 Features

- Importing and preprocessing Twitter data  
- Data visualization using word clouds and bar plots  
- Tokenization and TF-IDF vectorization  
- Model training and evaluation (Logistic Regression & Naive Bayes)  
- Sentiment prediction on new tweets  

## 📁 Project Structure

```
Sentimental_Analysis_of_Tweets/
│
├── Sentimental_Analysis_of_Tweets.ipynb  # Main Jupyter notebook
├── README.md                             # Project overview and instructions
└── requirements.txt                      # Dependencies (create if needed)
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Sentimental_Analysis_of_Tweets.git
cd Sentimental_Analysis_of_Tweets
```

2. Create a virtual environment and install dependencies:
```bash
pip install -r requirements.txt
```

## 🧾 Dependencies

You can generate a `requirements.txt` using:
```bash
pip freeze > requirements.txt
```

Main libraries used include:
- pandas
- numpy
- matplotlib
- seaborn
- sklearn
- nltk
- wordcloud

## 🚀 Usage

1. Launch the Jupyter Notebook:
```bash
jupyter notebook
```

2. Open `Sentimental_Analysis_of_Tweets.ipynb` and run the cells step-by-step.

## 📊 Results

- The notebook demonstrates good performance with accuracy and confusion matrix metrics.
- Visualizations show sentiment distributions and most frequent words for each sentiment.

## 📌 To-Do

- Add support for streaming Twitter data using Tweepy
- Extend to multi-class sentiment classification
- Export model for deployment

## 📝 License

This project is open-source under the MIT License.
---

