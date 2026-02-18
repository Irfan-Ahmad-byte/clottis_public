# Clottis - Professional DevOps Solutions

![Clottis Banner](https://img.shields.io/badge/DevOps-Professional%20Services-00d4ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge)

A modern, professional landing page for Clottis DevOps services, featuring cost optimization, infrastructure planning, and complete development-to-production assistance.

## 🚀 Live Demo

**GitHub Pages URL:** `https://your-username.github.io/clottis_web/`

## ✨ Features

- **Hero Carousel**: 4 rotating slides highlighting why human-led DevOps wins in the AI era
- **Services Section**: Comprehensive overview of DevOps offerings
- **Why Choose Clottis**: 6 compelling reasons with professional icons
- **Statistics**: Real industry data from Gartner, DORA, Deloitte reports
- **Blog Section**: 4 detailed articles with credible references
- **Responsive Design**: Mobile-first approach, works on all devices
- **Professional Color Scheme**: 60-30-10 rule (#1a1f3a, #f8f9fa, #00d4ff)
- **Call-to-Action**: WhatsApp and Calendly integration

## 📁 Project Structure

```
clottis_web/
├── index.html              # Main landing page
├── css/
│   ├── style.css          # Main styles with 60-30-10 color scheme
│   └── blog.css           # Blog-specific styles
├── js/
│   └── main.js            # Carousel, smooth scroll, mobile menu
├── blog/
│   ├── index.html         # Blog listing page
│   ├── hidden-costs-diy-devops.html
│   ├── cloud-misconfiguration-case-studies.html
│   ├── devops-roi-professional-services.html
│   └── ai-vs-human-devops.html
├── assets/
│   ├── images/            # (Add your images here)
│   └── icons/             # (Add custom icons here)
└── README.md
```

## 🎨 Design System

### Color Scheme (60-30-10 Rule)
- **Primary (60%)**: `#1a1f3a` - Deep Navy Blue (trust, professionalism)
- **Secondary (30%)**: `#f8f9fa` - Light Gray (clean, modern)
- **Accent (10%)**: `#00d4ff` - Cyan Blue (technology, innovation)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 700-800 weight
- **Body**: 400-500 weight

### Icons
All icons are inline SVG (no external dependencies) based on Heroicons design system.

## 📝 Blog Posts Included

1. **The Hidden Costs of DIY DevOps with AI Tools**
   - 69% cloud cost overruns statistic
   - Real examples of AI tool limitations
   - Prevention strategies

2. **Real Cost of Cloud Misconfigurations: Case Studies**
   - $4.45M average breach cost
   - 3 detailed real-world scenarios
   - Prevention checklist

3. **DevOps ROI: Why Professional Services Pay for Themselves**
   - 340% ROI over 3 years
   - Cost-benefit analysis
   - Client success stories

4. **AI in DevOps: Where It Helps and Where Humans Win**
   - 91% AI tool adoption vs 87% human preference for critical decisions
   - DORA 2025 insights
   - Hybrid approach framework

## 🌐 Deploying to GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd /home/irfan/Documents/backend_projects/clottis_web
git init
git add .
git commit -m "Initial commit: Clottis professional landing page"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `clottis_web` (or any name you prefer)
3. **Do NOT** initialize with README, .gitignore, or license (we already have files)

### Step 3: Push to GitHub

```bash
# Replace 'your-username' with your actual GitHub username
git remote add origin https://github.com/your-username/clottis_web.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes for deployment
6. Your site will be live at: `https://your-username.github.io/clottis_web/`

### Step 5: Custom Domain (Optional)

If you have a custom domain:

1. Create a file named `CNAME` in the root directory:
   ```bash
   echo "www.clottis.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Update your domain's DNS settings:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

3. In GitHub Pages settings, enter your custom domain and enable HTTPS

## 🔧 Customization Required

Before deploying, update these placeholders:

### 1. WhatsApp Number
Replace `92XXXXXXXXXX` in all files with your actual WhatsApp number:
- `index.html` (2 occurrences)
- All blog post files (4 files)
- `blog/index.html`

**Find and replace:** `92XXXXXXXXXX` → Your number (format: country code + number, e.g., `923001234567`)

### 2. Calendly Link
Replace `https://calendly.com/your-link` with your actual Calendly scheduling link:
- `index.html` (2 occurrences)
- All blog post files (4 files)
- `blog/index.html`

### 3. Email Address (Optional)
Replace `info@clottis.com` with your actual email in:
- `index.html` (footer)
- `blog/index.html` (footer)

### Quick Replace Commands:

```bash
# Replace WhatsApp number (Linux/Mac)
find . -type f -name "*.html" -exec sed -i 's/92XXXXXXXXXX/923001234567/g' {} +

# Replace Calendly link
find . -type f -name "*.html" -exec sed -i 's|calendly.com/your-link|calendly.com/clottis/consultation|g' {} +

# Replace email
find . -type f -name "*.html" -exec sed -i 's/info@clottis.com/your-email@clottis.com/g' {} +
```

## 📊 Blog Statistics & References

All statistics in the blog posts are from credible sources:

- **Gartner** (Cloud spending and cost reports)
- **DORA/Google Cloud** (State of DevOps Reports 2024-2025)
- **Deloitte** (FinOps predictions and cloud spending)
- **IBM Security** (Cost of Data Breach Report)
- **Flexera** (State of the Cloud Report)
- **McKinsey** (Developer productivity research)
- **Stack Overflow** (Developer Survey)
- **GitLab** (DevSecOps Survey)

All reference links are included in each blog post.

## 🎯 SEO Optimization

The site includes:
- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Fast loading (no heavy dependencies)
- Mobile-responsive design
- Proper heading hierarchy

## 🔄 Future Enhancements

Optional improvements you can add later:
- Add actual images/photos to replace gradient placeholders
- Integrate real newsletter service (Mailchimp, ConvertKit)
- Add Google Analytics or privacy-friendly alternative (Plausible)
- Implement dark mode toggle
- Add testimonials section
- Create downloadable resources (cost calculators, checklists)
- Add LinkedIn/Twitter social links

## 📱 Browser Compatibility

Tested and compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Clottis. All rights reserved.

## 🤝 Support

For questions or support, contact via:
- WhatsApp: [Your Number]
- Email: info@clottis.com
- Schedule: [Your Calendly Link]

---

**Built with** ❤️ **for professional DevOps services**
