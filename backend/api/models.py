from django.db import models


class Publication(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    content = models.TextField()
    published_at = models.DateTimeField(null=True, blank=True)

    # 🌟 NEW FIELD: Stores the actual physical PDF document rows on your server storage array
    pdf_file = models.FileField(upload_to='publications_pdfs/', null=True, blank=True)
    
    published_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title


class DecidedCase(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField(blank=True)
    case_date = models.DateField(null=True, blank=True)

    # 🌟 NEW FIELD: Stores the actual physical PDF document rows on your server storage array
    pdf_file = models.FileField(upload_to='publications_pdfs/', null=True, blank=True)

    def __str__(self):
        return self.title


class AdvisoryOpinion(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField(blank=True)
    issued_at = models.DateField(null=True, blank=True)

    # 🌟 NEW FIELD: Stores the actual physical PDF document rows on your server storage array
    pdf_file = models.FileField(upload_to='publications_pdfs/', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-issued_at'] # Fallback ordering configuration


class Event(models.Model):

    CATEGORY_CHOICES = [
        ('News', 'News'),
        ('Event', 'Event'),
        ('Announcement', 'Announcement'),
    ]

    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='event_images/', null=True, blank=True)
    video_url = models.URLField(max_length=500, null=True, blank=True)

    description = models.TextField(blank=True)
    published_at = models.DateTimeField(null=True, blank=True,)
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES, # <-- This turns the admin text box into a click selection box
        default='Event',
    )
    
    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class Training(models.Model):
    CATEGORY_CHOICES = [
        ('agm', 'Annual AGM'),
        ('workshop', 'Workshop'),
        ('conference', 'Conference'),
    ]

    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='event_images/', null=True, blank=True)
    video_url = models.URLField(max_length=500, null=True, blank=True)

    description = models.TextField(blank=True)
    published_at = models.DateTimeField(null=True, blank=True,)
    start_date = models.DateTimeField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='workshop') # Add this line
    

    def __str__(self):
        return self.title
