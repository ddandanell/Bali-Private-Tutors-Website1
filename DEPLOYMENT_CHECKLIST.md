# Vercel Deployment Checklist

## Pre-Deployment Verification ✅

- [x] Build succeeds locally (`npm run build`)
- [x] All tests pass (`npm run lint`)
- [x] No console.log statements in production code
- [x] No hardcoded API keys or secrets
- [x] .env.example created for environment variables
- [x] .gitignore includes node_modules, dist, .env, .vercel
- [x] All images have alt attributes
- [x] Meta tags present for SEO
- [x] vercel.json configuration file present

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select this repository: `ddandanell/Bali-Private-Tutors-Website1`
   - Click "Import"

2. **Configure Project**
   - Vercel will auto-detect the framework (Vite)
   - Vercel will use settings from `vercel.json`:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install --legacy-peer-deps`

3. **Add Environment Variables** (if needed in the future)
   - Go to Project Settings → Environment Variables
   - Add any variables from `.env.example`
   - Remember: All client-side variables must start with `VITE_`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Vercel will provide a production URL

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Post-Deployment Verification

After deployment, verify the following:

### Functional Checks
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] All pages render correctly:
  - [ ] Home (`/`)
  - [ ] Subject Tutoring (`/subject-tutoring`)
  - [ ] Curricula Support (`/curricula-support`)
  - [ ] Locations (`/locations`)
  - [ ] About Us (`/about-us`)
  - [ ] Blog (`/blog`)
  - [ ] Contact redirects to Home
- [ ] Images load correctly
- [ ] Fonts load (Lato & Montserrat from Google Fonts)
- [ ] Mobile menu works
- [ ] Social links work

### Technical Checks
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] Page loads in under 3 seconds
- [ ] No console errors in browser DevTools
- [ ] Meta tags visible in page source
- [ ] Favicon loads

### Performance Checks (Optional)
- [ ] Run Lighthouse audit (target: 90+ performance score)
- [ ] Check loading time on mobile network
- [ ] Verify images are lazy-loaded

## Common Issues & Solutions

### Issue: Build fails with "ERESOLVE could not resolve"
**Solution**: Vercel should use `--legacy-peer-deps` from vercel.json. If not:
- Go to Project Settings → General
- Override Install Command: `npm install --legacy-peer-deps`

### Issue: 404 on page refresh
**Solution**: This should be handled by the rewrite rule in vercel.json. If not:
- Check that `vercel.json` is in the repository root
- Verify the rewrites configuration is correct

### Issue: Images not loading
**Solution**: 
- Verify all images are in `src/assets/` directory
- Check that imports are correct in JSX files
- Rebuild and redeploy

### Issue: Fonts not loading
**Solution**:
- Check that Google Fonts links are in `index.html`
- Verify network requests in browser DevTools
- Check for CSP issues (should be none)

## Continuous Deployment

Vercel automatically deploys when you push to the main branch:

1. **Push to GitHub**: 
   ```bash
   git push origin main
   ```

2. **Automatic Deployment**:
   - Vercel detects the push
   - Runs build automatically
   - Deploys to production

3. **Preview Deployments**:
   - Every PR gets a preview URL
   - Test changes before merging

## Environment Variables Setup (If Needed)

If you add environment variables in the future:

1. **Local Development**:
   ```bash
   cp .env.example .env
   # Edit .env with actual values
   ```

2. **Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add each variable
   - Select environments (Production, Preview, Development)
   - Redeploy for changes to take effect

## Performance Optimization Tips

After initial deployment, consider:

1. **Image Optimization**
   - Convert images to WebP format
   - Reduce file sizes (currently 800KB-1MB each)
   - Target: Under 200KB per image

2. **Analytics**
   - Add Vercel Analytics (free tier)
   - Or integrate Google Analytics

3. **Form Backend**
   - Integrate Formspree or similar service
   - Update form handlers in Home.jsx

See `OPTIMIZATION_RECOMMENDATIONS.md` for complete list.

## Monitoring

### Vercel Dashboard
- View deployment logs
- Check performance metrics
- Monitor bandwidth usage

### Vercel Analytics (Optional)
- Real user monitoring
- Core Web Vitals
- Geographic performance data

## Rollback Procedure

If something goes wrong:

1. **Via Dashboard**:
   - Go to Deployments tab
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. **Via CLI**:
   ```bash
   vercel rollback
   ```

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/
- **React Router Docs**: https://reactrouter.com/

## Success Criteria ✅

Deployment is successful when:
- ✅ Site is accessible via HTTPS
- ✅ All pages load correctly
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Images load
- ✅ Navigation works
- ✅ Performance score > 85

---

**Last Updated**: January 4, 2026
**Status**: Ready for Production Deployment 🚀
