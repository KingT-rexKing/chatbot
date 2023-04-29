from django import forms

class ChatForm(forms.Form):

    sentence = forms.CharField(label='チャット', widget=forms.Textarea(), required=True)
