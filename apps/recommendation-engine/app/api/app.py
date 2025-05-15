from fastapi import FastAPI
from app.api.v1.endpoints import recommendations
from app.config import prefix


def create_app() -> FastAPI:
    app = FastAPI(
        title="Skibookers Recommendation API",
        description="API for ski resort recommendation",
        version="1.0.0",
    )

    app.include_router(
        recommendations.router, prefix=prefix.V1, tags=["Recommendations"]
    )

    return app
