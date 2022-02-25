# from curses.ascii import US
# from multiprocessing import context
# from re import M, template
# import re
# from tkinter.messagebox import NO

# from django.shortcuts import render
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.template import loader

from json import dumps

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

def episodes(request) :
    # if request.method == "POST" :
    #     form = forms.NameForm(request.POST)
    #     if form.
    # return HttpResponseRedirect("/thanks/")
    # return HttpResponse("episodes")
    # try :
    #     return HttpResponse(request.POST["name"])
    # except :
    #     return HttpResponse("nothing")
    try :
        split       = request.GET["video"].split("-")
        template    = loader.get_template("polls/episode.html")
        context     = {
            "video"         : dumps(data.videos[int(split[0])][1][int(split[1])][1][int(split[2])][3]),
            "footer"        : data.footer,
        }
        return HttpResponse(template.render(context, request))
    except :
        template = loader.get_template("polls/episodes.html")
        context = {
            "videos"        : data.videos,
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