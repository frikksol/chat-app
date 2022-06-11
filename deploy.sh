#!/usr/bin/env bash
gcloud config set account frikksol@gmail.com
gcloud config set project chat-app-353012

gcloud builds submit --tag gcr.io/chat-app-353012/chat-app
gcloud run deploy --image gcr.io/chat-app-353012/chat-app:latest --platform managed
