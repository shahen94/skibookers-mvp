from typing import List
from pydantic import BaseModel, Field

class QuestionAnswer(BaseModel):
    """
    Single question answer model
    """
    id: str = Field(description="Unique identifier")
    answer: str = Field(description='Answer text')

class Quiz(BaseModel):
    """Quiz model. Contains list of questions and answers"""
    quiz: List[QuestionAnswer] = Field(description="List of quiz answers")