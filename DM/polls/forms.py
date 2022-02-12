from django import forms

# forms taken

class NameForm(forms.Form) :
    your_name = forms.CharField(label="Your name", max_length=100)