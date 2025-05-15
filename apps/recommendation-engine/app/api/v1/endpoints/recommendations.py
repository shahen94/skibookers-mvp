from fastapi import APIRouter, Body
from fastapi.params import Depends

from app.api.dependencies import get_engine
from app.engine.graph import RecommendationEngine
from app.schemas.quiz import Quiz
from app.schemas.recommendations import Recommendation

router = APIRouter()


def _from_quiz_to_prompt(quiz: Quiz) -> str:
    answers = quiz.quiz

    prompt: list[str] = []

    for answer in answers:
        prompt.append(f"{answer.id}: {answer.answer}")

    return "\n".join(prompt)


@router.post("/recommendation", response_model=Recommendation)
def generate_recommendation(
    quiz: Quiz = Body(...), engine: RecommendationEngine = Depends(get_engine)
):
    """
    This endpoint generates a recommendation based on the quiz answers provided by the user.
    It uses the RecommendationEngine to find the best matching resorts based on the quiz answers.
    """
    prompt = _from_quiz_to_prompt(quiz)
    docs = engine.find(prompt)

    return {"resorts": docs}
