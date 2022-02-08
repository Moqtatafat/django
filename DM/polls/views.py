from curses.ascii import US
from multiprocessing import context
from re import M, template
import re
from tkinter.messagebox import NO
from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.template import loader

from . import models, data

# Create your views here.

def index(request) :
    template = loader.get_template('polls/index.html')
    identifier = 0
    context = {
        "identifier"    : identifier,
        "slides"        : data.slides,
    }
    return HttpResponse(template.render(context, request))

def epsoides(request) :
    return HttpResponse("epsoides")

def posts(request) :
    return HttpResponse("Posts")

def imgs(request) :
    return HttpResponse("Imgs")

def about(request) :
    return HttpResponse("About")

# ngrok http -auth="jo:760320" -bind-tls=true https://localhost:8000