from pydantic import BaseModel, Field
from typing import List

from app.schemas.resort import Resort


class Recommendation(BaseModel):
    """
    Recommended resorts list
    """

    resorts: List[Resort] = Field(description="Resort list")
