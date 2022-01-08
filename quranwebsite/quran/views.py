from django.shortcuts import render, HttpResponse
from .models import Hadis, Header, About, Contact, Footer, Contact_us, Header, Aye
from .filters import AyeFilter
from .models import Aye
# Create your views here.

#main page
class AyeListView():
    model = Aye
    template_name = 'templates/i.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["filter"] = AyeFilter(self.request.GET, queryset=self.get_queryset())
        return context
    
def main_page(request):
    
    header = Header.objects.all()
    aye = Aye.objects.all()
    hadis = Hadis.objects.all()
    about = About.objects.all()
    contact = Contact.objects.all()
    footer = Footer.objects.all()
    

    if request.method == "POST":
        Contact.objects.create(name = request.POST.get('name'), number = request.POST.get('number'), view = request.POST.get('view'))
    
    
    context = {
        'header' : header,
        'aye' : aye,
        'hadis' : hadis,
        'about' : about,
        'contact' : contact,
        'footer' : footer,
    }

    return render (request, 'i.html' , context)
