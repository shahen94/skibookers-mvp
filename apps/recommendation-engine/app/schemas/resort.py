from typing import List
from pydantic import BaseModel, Field


"""
"id": "1",
"title": "Arthur's Resort",
"price_min": 120,
"price_max": 250,
"tags": ["family", "alps", "beginner-friendly"]
"""
class Resort(BaseModel):
    """
    Single Resort Model
    """
    id: str = Field(..., title="Resort ID")
    title: str = Field(description="Resort title")
    price_min: float = Field(description="Resort price minimum")
    price_max: float = Field(description="Resort price maximum")
