# Sanity CMS Quick Guide

## Access Sanity Studio

1. Visit: `https://morphio-web.vercel.app/studio` (or `http://localhost:3000/studio` locally)
2. Sign in with your Sanity account

---

## Add a Portfolio Project

1. Click **"Portfolio"** in the left sidebar
2. Click **"Create"** button (top right)
3. Fill in the fields:
   - **Title**: Project name (e.g., "Bella's Bakery")
   - **Slug**: Auto-generated URL (click "Generate")
   - **Description**: Brief description of the project
   - **Main Image**: Click to upload project screenshot
   - **Category**: Select from dropdown (see Category Guide below)
   - **Custom Category Name**: Only appears if you select "Other (Custom)"
   - **Client Name**: Client's business name
   - **Tags**: Add keywords (e.g., "bakery", "modern", "elegant")
   - **Featured**: Check this to show on homepage
   - **Completed Date**: Select project completion date
4. Click **"Publish"** (bottom right)

### Category Guide for Portfolio

**Use Predefined Categories** (recommended to avoid typos):
- Bakery & Cafe
- Salon & Barbershop
- Restaurant
- Cafe & Restaurant
- Retail Shop
- Professional Services
- Health & Wellness
- Beauty & Spa
- E-commerce
- Portfolio

**Use Custom Category** when you need a category not in the list:
1. Select **"Other (Custom)"** from Category dropdown
2. A new field **"Custom Category Name"** will appear
3. Type your custom category (e.g., "Medical Clinic", "Real Estate")
4. Make sure to spell it exactly the same for all projects in that category!

---

## Add a Template

1. Click **"Website Templates"** in the left sidebar
2. Click **"Create"** button
3. Fill in the fields:
   - **Template Name**: Name (e.g., "Modern Restaurant")
   - **Slug**: Auto-generated URL (click "Generate")
   - **Description**: Brief description of template
   - **Preview Image**: Upload template screenshot
   - **Category**: Select from dropdown (see Category Guide below)
   - **Custom Category Name**: Only appears if you select "Other (Custom)"
   - **Price**: Enter price (e.g., 100)
   - **Features**: Click "Add item" to add each feature
   - **Tags**: Add keywords (e.g., "modern", "elegant")
   - **Demo URL**: Optional link to live demo
   - **Popular Template**: Check to mark as popular
4. Click **"Publish"**

### Category Guide for Templates

**Use Predefined Categories** (recommended to avoid typos):
- Restaurant
- Salon & Spa
- E-commerce
- Professional Services
- Portfolio
- Landing Page
- Bakery & Cafe
- Health & Wellness

**Use Custom Category** when you need a category not in the list:
1. Select **"Other (Custom)"** from Category dropdown
2. A new field **"Custom Category Name"** will appear
3. Type your custom category (e.g., "Hotel", "Education")
4. Make sure to spell it exactly the same for all templates in that category!

---

## Edit Existing Content

1. Click content type in sidebar (Portfolio or Website Templates)
2. Click on the item you want to edit
3. Make your changes
4. Click **"Publish"** to save

---

## Delete Content

1. Find the item in the list
2. Click on it to open
3. Click the **three dots menu** (top right)
4. Select **"Delete"**
5. Confirm deletion

---

## Image Guidelines

### Do I need to optimize images before uploading?

**No!** Sanity automatically handles image optimization:
- Automatically compresses images
- Creates multiple sizes for different devices
- Converts to modern formats (WebP)
- Adds CDN delivery for fast loading

Just upload your original high-quality images directly!

### Recommended Image Dimensions

**Portfolio Projects (Main Image):**
- Minimum: 1200 x 800 pixels
- Recommended: 1600 x 1067 pixels (3:2 ratio)
- Format: JPG or PNG

**Templates (Preview Image):**
- Minimum: 1200 x 800 pixels
- Recommended: 1600 x 1067 pixels (3:2 ratio)
- Format: JPG or PNG

**General Tips:**
- Use landscape orientation (horizontal images)
- Higher resolution is better - Sanity will optimize it
- Keep file size under 5MB for faster uploads
- Don't worry about "tiny pixel" compression - Sanity handles it

## Tips

- Always click **"Publish"** to save changes (not just "Save")
- Use **Featured** checkbox on portfolio items to show them on homepage
- Add clear, descriptive **tags** for better organization
- Upload high-quality images directly - no need to pre-compress
- Use the **"Generate"** button for slugs (they must be unique)
- **Use predefined categories** to prevent typos that break filtering
- **Custom categories** are automatically added to filter buttons on website

---

## Managing Categories

### How to Change a Custom Category

If you misspelled a custom category or want to rename it:

1. Find all items with that category
2. Edit each one individually
3. Change **"Other (Custom)"** to a predefined category, OR
4. Keep **"Other (Custom)"** and update the **Custom Category Name** field
5. Click **"Publish"** on each item

### How to Remove a Category from the Filter

Categories appear on the website filter automatically based on your content:
- Delete all items with that category, OR
- Change them to a different category
- The category will disappear from filters automatically

**Note**: Predefined categories always appear in dropdown even if not used yet. Custom categories only appear if at least one item uses them.

---

## Add CORS Origin (First Time Setup)

If you see "add CORS origin" error:

1. Go to https://sanity.io/manage
2. Select your "Morphio Web" project
3. Click **"API"** → **"CORS Origins"**
4. Click **"Add CORS origin"**
5. Add your website URL (e.g., `https://morphio-web.vercel.app`)
6. Check "Allow credentials"
7. Click **"Save"**

You can add multiple domains (Vercel URL, custom domain, localhost).
