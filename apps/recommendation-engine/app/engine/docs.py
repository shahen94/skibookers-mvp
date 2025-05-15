from langchain_core.documents import Document

docs = [
    Document(
        page_content=(
            "Region: Alps\n"
            "Budget: $100–$200\n"
            "Vibe: Family\n"
            "Group Type: Family\n"
            "Skill Level: Beginner"
        ),
        metadata={
            "id": "1",
            "title": "Arthur's Resort",
            "price_min": 120,
            "price_max": 250,
        }
    ),
    Document(
        page_content=(
            "Region: Rockies\n"
            "Budget: $300+\n"
            "Vibe: Luxury\n"
            "Group Type: Couple\n"
            "Skill Level: Advanced"
        ),
        metadata={
            "id": "2",
            "title": "Storm Peak",
            "price_min": 300,
            "price_max": 600,
        }
    ),
    Document(
        page_content=(
            "Region: Scandinavia\n"
            "Budget: $100–$200\n"
            "Vibe: Relaxed\n"
            "Group Type: Solo\n"
            "Skill Level: Intermediate"
        ),
        metadata={
            "id": "3",
            "title": "Aurora Ridge",
            "price_min": 180,
            "price_max": 350,
        }
    ),
    Document(
        page_content=(
            "Region: Japan\n"
            "Budget: $200–$300\n"
            "Vibe: Adventure\n"
            "Group Type: Friends\n"
            "Skill Level: Pro"
        ),
        metadata={
            "id": "4",
            "title": "Niseko Horizon",
            "price_min": 200,
            "price_max": 400,
        }
    ),
    Document(
        page_content=(
            "Region: Eastern Europe\n"
            "Budget: <$100\n"
            "Vibe: Relaxed\n"
            "Group Type: Solo\n"
            "Skill Level: Beginner"
        ),
        metadata={
            "id": "5",
            "title": "Snow Haven",
            "price_min": 80,
            "price_max": 150,
        }
    ),
    Document(
        page_content=(
            "Region: Alps\n"
            "Budget: $200–$300\n"
            "Vibe: Party\n"
            "Group Type: Friends\n"
            "Skill Level: Intermediate"
        ),
        metadata={
            "id": "6",
            "title": "Glacier Beat",
            "price_min": 210,
            "price_max": 320,
        }
    ),
    Document(
        page_content=(
            "Region: Rockies\n"
            "Budget: $100–$200\n"
            "Vibe: Adventure\n"
            "Group Type: Corporate Group\n"
            "Skill Level: Advanced"
        ),
        metadata={
            "id": "7",
            "title": "Pioneer Basecamp",
            "price_min": 150,
            "price_max": 200,
        }
    ),
Document(
        page_content=(
            "Region: Scandinavia\n"
            "Budget: <$100\n"
            "Vibe: Relaxed\n"
            "Group Type: Family\n"
            "Skill Level: Beginner"
        ),
        metadata={
            "id": "8",
            "title": "Frost Fjord",
            "price_min": 90,
            "price_max": 130,
        }
    ),
    Document(
        page_content=(
            "Region: Japan\n"
            "Budget: $300+\n"
            "Vibe: Luxury\n"
            "Group Type: Couple\n"
            "Skill Level: Pro"
        ),
        metadata={
            "id": "9",
            "title": "Shinsetsu Peak",
            "price_min": 350,
            "price_max": 500,
        }
    ),
    Document(
        page_content=(
            "Region: Eastern Europe\n"
            "Budget: $100–$200\n"
            "Vibe: Adventure\n"
            "Group Type: Friends\n"
            "Skill Level: Intermediate"
        ),
        metadata={
            "id": "10",
            "title": "Carpathian Ride",
            "price_min": 110,
            "price_max": 190,
        }
    ),
    Document(
        page_content=(
            "Region: Alps\n"
            "Budget: $300+\n"
            "Vibe: Luxury\n"
            "Group Type: Corporate Group\n"
            "Skill Level: Advanced"
        ),
        metadata={
            "id": "11",
            "title": "Summit Crown",
            "price_min": 400,
            "price_max": 700,
        }
    ),
    Document(
        page_content=(
            "Region: Rockies\n"
            "Budget: <$100\n"
            "Vibe: Party\n"
            "Group Type: Friends\n"
            "Skill Level: Beginner"
        ),
        metadata={
            "id": "12",
            "title": "Moose Grove",
            "price_min": 80,
            "price_max": 120,
        }
    ),
    Document(
        page_content=(
            "Region: Japan\n"
            "Budget: $100–$200\n"
            "Vibe: Family\n"
            "Group Type: Family\n"
            "Skill Level: Intermediate"
        ),
        metadata={
            "id": "13",
            "title": "Hakuba Nest",
            "price_min": 160,
            "price_max": 220,
        }
    ),
    Document(
        page_content=(
            "Region: Alps\n"
            "Budget: $200–$300\n"
            "Vibe: Adventure\n"
            "Group Type: Solo\n"
            "Skill Level: Advanced"
        ),
        metadata={
            "id": "14",
            "title": "Icewolf Summit",
            "price_min": 230,
            "price_max": 290,
        }
    ),
    Document(
        page_content=(
            "Region: Scandinavia\n"
            "Budget: $300+\n"
            "Vibe: Party\n"
            "Group Type: Friends\n"
            "Skill Level: Pro"
        ),
        metadata={
            "id": "15",
            "title": "Nordic Blaze",
            "price_min": 310,
            "price_max": 450,
        }
    )
]
