deps:
	pip install uv
	uv pip install --no-cache --system -r requirements.lock

deps-dev:
	rye sync

lint:
	rye run ruff check src/
	rye run mypy src/

migrate:
	rye run alembic revision --autogenerate
	rye run alembic upgrade head

format:
	rye run isort src/
	rye run ruff format src/
	rye run black src/

run:
	fastapi run src/app.py --host 0.0.0.0 --port 8000

run-dev:
	rye run fastapi dev src/app.py
