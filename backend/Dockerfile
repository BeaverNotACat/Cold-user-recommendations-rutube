FROM python:3.11

WORKDIR /backend

RUN apt-get update && apt-get install make
COPY Makefile requirements.lock pyproject.toml README.md .
RUN make deps

COPY . .

CMD make run
