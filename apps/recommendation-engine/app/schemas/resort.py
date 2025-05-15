from typing import List
from pydantic import BaseModel, Field


class Resort(BaseModel):
    """
    Single Resort Model
    """

    id: str = Field(..., title="Resort ID")
    title: str = Field(description="Resort title")
    price_min: float = Field(description="Resort price minimum")
    price_max: float = Field(description="Resort price maximum")
