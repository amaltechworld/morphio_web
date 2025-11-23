# Sanity.io Setup Guide

This guide will help you set up Sanity.io for your Morphio Web project.

## 🚀 Quick Start (30 minutes)

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Get Started" and sign up with GitHub, Google, or Email
3. Verify your email if needed

### Step 2: Create a New Project

1. Once logged in, go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create Project"
3. Fill in the project details:
   - **Project name**: Morphio Web (or your preferred name)
   - **Dataset**: production
4. Click "Create Project"
5. **Important**: Copy your **Project ID** - you'll need this next!

### Step 3: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_project_id_here` with your actual Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

3. Save the file

### Step 4: Start Your Development Server

```bash
npm run dev
```

### Step 5: Access Sanity Studio

1. Open your browser and go to: `http://localhost:3000/studio`
2. You'll be prompted to log in - use your Sanity account credentials
3. You should now see the beautiful Sanity Studio admin dashboard!

## 📝 Adding Content

### Adding a Portfolio Project

1. Go to `http://localhost:3000/studio`
2. Click on "Portfolio Projects" in the left sidebar
3. Click the "+" button or "Create new document"
4. Fill in the project details:
   - **Project Title**: The name of your project
   - **Slug**: Click "Generate" to auto-create from the title
   - **Short Description**: A brief summary (max 200 characters)
   - **Main Image**: Click to upload your main project image
     - Don't forget to add Alt Text for accessibility!
   - **Category**: Select from the dropdown
   - **Tags**: Add relevant technologies or keywords
   - **Client Name**: Optional client information
   - **Project URL**: Link to the live site
   - **Completion Date**: When the project was finished
   - **Featured Project**: Toggle to show on homepage
   - **Image Gallery**: Add multiple images to showcase your work
   - **Detailed Content**: Rich text editor for full project description
5. Click "Publish" when done

### Adding a Service

1. Go to `http://localhost:3000/studio`
2. Click on "Services" in the left sidebar
3. Click the "+" button
4. Fill in:
   - Service Title, Description, Icon Name
   - Service Image, Features, Pricing
5. Click "Publish"

### Adding a Template

1. Go to `http://localhost:3000/studio`
2. Click on "Website Templates" in the left sidebar
3. Click the "+" button
4. Fill in the template details
5. Click "Publish"

## 🎨 Viewing Your Content

- **Portfolio**: Visit `http://localhost:3000/portfolio` to see all projects
- **Individual Project**: Click on any project card to view details
- **Homepage**: Featured projects will appear automatically

## 🔧 What Was Set Up

### Files Created

1. **sanity.config.ts** - Main Sanity configuration
2. **lib/sanity.client.ts** - Client for fetching data
3. **lib/sanity.queries.ts** - Pre-built queries for common operations
4. **lib/sanity.types.ts** - TypeScript types for your content
5. **sanity/schemas/** - Content schemas (Portfolio, Service, Template)
6. **app/studio/[[...tool]]/** - Sanity Studio interface
7. **components/SanityImage.tsx** - Optimized image component
8. **components/PortfolioCard.tsx** - Portfolio project card component

### Content Types (Schemas)

1. **Portfolio Projects** - Showcase your work with images, descriptions, and galleries
2. **Services** - List the services you offer
3. **Website Templates** - Display pre-built templates for clients

## 📚 Next Steps

1. **Add Real Content**: Replace placeholder data with your actual projects
2. **Customize Schemas**: Edit files in `sanity/schemas/` to add custom fields
3. **Deploy**: When ready, deploy both your Next.js app and configure Sanity for production

## 🆘 Troubleshooting

### Can't access /studio?
- Make sure your dev server is running (`npm run dev`)
- Check that your Project ID is correct in `.env.local`
- Try clearing your browser cache

### Images not showing?
- Verify your Project ID is correct
- Check that images were successfully uploaded in Studio
- Look for console errors in your browser

### Content not updating?
- Sanity uses CDN caching. Click "Publish" again in Studio
- Refresh your page with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## 💰 Pricing

Sanity's free tier includes:
- Unlimited admin users
- 100k API requests per month
- 10GB bandwidth
- 5GB assets storage
- Perfect for small business portfolios!

## 🔗 Useful Links

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Studio](https://www.sanity.io/studio)
- [Your Project Dashboard](https://www.sanity.io/manage)

---

**Need help?** Check the [Sanity Community](https://www.sanity.io/community) or ask in their Slack channel.
