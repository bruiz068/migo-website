# Analytics Dashboard

## Key Metrics to Track

### 🎯 **Lead Generation Metrics**
- **Contact Form Submissions** - Track by inquiry type (Business, Driver, General)
- **Quote Requests** - Track pricing page conversions
- **Driver Applications** - Track driver acquisition funnel
- **Phone Clicks** - Track direct contact attempts
- **Email Clicks** - Track email engagement

### 📊 **Engagement Metrics**
- **Page Views** - Most popular pages and content
- **Session Duration** - How long users stay on site
- **Bounce Rate** - Percentage of single-page sessions
- **Video Engagement** - Demo video play/completion rates
- **FAQ Interactions** - Most expanded questions

### 🌍 **Geographic Metrics**
- **Service Area Interest** - Track which cities get attention
- **Traffic Sources** - Where visitors come from
- **Local SEO Performance** - Phoenix-area search visibility

### ⚡ **Performance Metrics**
- **Page Load Times** - Core Web Vitals tracking
- **First Contentful Paint** - Page rendering speed
- **Error Tracking** - JavaScript errors and issues
- **Mobile vs Desktop** - Device usage patterns

## Setup Instructions

### 1. **Google Analytics 4**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account → Property → Web
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add to environment variables

### 2. **Microsoft Clarity** 
1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Create new project
3. Copy Project ID 
4. Add to environment variables

### 3. **Google Search Console**
1. Go to [Search Console](https://search.google.com/search-console/)
2. Add property → URL prefix → https://migonow.com
3. Copy verification meta tag content
4. Add to environment variables

### 4. **Environment Variables**
Create `.env.local` file with:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-project-id
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

## Custom Events Implemented

### **Conversion Events**
- `contact_form_submit` - Form completions with inquiry type
- `driver_application_start` - Driver sign-up initiations
- `quote_request` - Pricing/service inquiries
- `phone_click` - Direct contact attempts
- `email_click` - Email contact attempts

### **Engagement Events**
- `navigation_click` - Menu/link usage tracking
- `demo_video_play` - Video engagement start
- `demo_video_complete` - Video completion rate
- `faq_expand` - Help content usage
- `service_area_check` - Geographic interest

### **Performance Events**
- `page_load_time` - Loading performance
- `first_contentful_paint` - Rendering speed
- `engagement_time` - Session quality
- `javascript_error` - Technical issues

## Key Reports to Monitor

### **Weekly Reports**
- Total sessions and users
- Top performing pages
- Contact form conversion rate
- Traffic sources breakdown

### **Monthly Reports**
- Geographic performance (Phoenix focus)
- Mobile vs desktop usage
- Page speed trends
- Error rate monitoring

### **Quarterly Reports**
- Lead generation trends
- Driver application funnel
- SEO keyword performance
- Competitor comparison

## Optimization Recommendations

### **Based on Analytics Data:**
1. **High Bounce Rate** → Improve page loading speed
2. **Low Contact Forms** → Optimize CTAs and form placement
3. **Mobile Issues** → Focus on mobile experience
4. **Geographic Gaps** → Expand service area messaging
5. **Technical Errors** → Fix JavaScript issues promptly

## Next Steps

1. **Set up tracking IDs** in environment variables
2. **Deploy to production** to start collecting data
3. **Monitor for 2-4 weeks** to establish baseline
4. **Create custom reports** in Google Analytics
5. **Set up alerts** for performance issues
6. **Regular optimization** based on data insights
