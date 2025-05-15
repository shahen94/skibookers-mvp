from typing import List

from langchain_core.documents import Document
from langchain_core.embeddings import Embeddings
from langchain_core.vectorstores import VectorStore
from langchain_community.vectorstores.chroma import Chroma
from app.schemas.resort import Resort
from .docs import docs


class RecommendationEngine:
    embeddings: Embeddings
    store: VectorStore

    def __init__(self, _embeddings: Embeddings):
        self.embeddings = _embeddings
        self.store = Chroma.from_documents(docs, embedding=self.embeddings)

    def find(self, text: str) -> List[Resort]:
        retriever = self.store.as_retriever()
        retrieved_docs: List[Document] = retriever.invoke(text)

        resorts: List[Resort] = []
        for doc in retrieved_docs:
            try:
                resorts.append(Resort(**doc.metadata))
            except Exception as e:
                print(e)
                # print(f"Failed to parse document {doc.metadata.get('id')}: {e}")

        return resorts
