from langchain_openai.embeddings import OpenAIEmbeddings
from app.engine.graph import RecommendationEngine

# Shared engine instance
engine: RecommendationEngine | None = None

def get_engine() -> RecommendationEngine:
    global engine

    if engine is None:
        embeddings = OpenAIEmbeddings(
            model="text-embedding-3-small"
        )  # or any other embedding
        engine = RecommendationEngine(_embeddings=embeddings)

    return engine