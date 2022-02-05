from curses.ascii import US
from multiprocessing import context
from re import M, template
import re
from tkinter.messagebox import NO
from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.template import loader

from . import models

# Create your views here.

def index(request) :
    template = loader.get_template('polls/index.html')
    context = None
    return HttpResponse(template.render(context, request))

def epsoides(request) :
    return HttpResponse("epsoides")

def posts(request) :
    return HttpResponse("Posts")

def imgs(request) :
    return HttpResponse("Imgs")

def about(request) :
    return HttpResponse("About")