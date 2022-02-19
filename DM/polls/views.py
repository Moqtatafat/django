# from curses.ascii import US
# from multiprocessing import context
# from re import M, template
# import re
# from tkinter.messagebox import NO
from django.shortcuts import render
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.template import loader

from . import models, data, forms

# Create your views here.

def index(request) :
    template = loader.get_template("polls/index.html")
    context = {
        "slides"        : data.slides,
        "opinion"       : data.opinion,
        "footer"        : data.footer,
        # "forms"         : forms.NameForm(),
    }
    return HttpResponse(template.render(context, request))

def epsoides(request) :
    # if request.method == "POST" :
    #     form = forms.NameForm(request.POST)
    #     if form.
    # return HttpResponseRedirect("/thanks/")
    # return HttpResponse("epsoides")
    # try :
    #     return HttpResponse(request.POST["name"])
    # except :
    #     return HttpResponse("nothing")
    template = loader.get_template("polls/about.html")
    context = {
        "footer"        : data.footer,
    }
    return HttpResponse(template.render(context, request))

def posts(request) :
    template = loader.get_template("polls/about.html")
    context = {
        "footer"        : data.footer,
    }
    return HttpResponse(template.render(context, request))

def imgs(request) :
    template = loader.get_template("polls/about.html")
    context = {
        "footer"        : data.footer,
    }
    return HttpResponse(template.render(context, request))

def about(request) :
    template = loader.get_template("polls/about.html")
    context = {
        "footer"        : data.footer,
    }
    return HttpResponse(template.render(context, request))

# ngrok http -auth="jo:760320" -bind-tls=true https://localhost:8000