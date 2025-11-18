# Backup Branch Comparison Report

**Comparison Date:** Generated on branch comparison  
**Backup Branch:** `backup`  
**Current Branch:** `emman-sa-main-backup`  
**Scope:** `shoreagents-main` folder only (excluding `bpoc`)

---

## Summary

This document lists all changes from the `backup` branch that are not present in the current branch (`emman-sa-main-backup`). The comparison focuses exclusively on the `shoreagents-main` folder.

### Statistics
- **Files missing in current branch:** 62
- **Files modified between branches:** 228

---

## 1. Files Missing in Current Branch

These files exist in the `backup` branch but are **not present** in the current branch (`emman-sa-main-backup`):

### SQL Files & Database Scripts
- `ADD_DESIRED_TEAM_SIZE_COLUMN.sql`
- `check-content-views.sql`
- `check-db.sql`
- `FIX_LEAD_PROGRESS_PERMISSIONS.sql`
- `FIX_PERMISSIONS_AND_RLS.sql`
- `fix-all-permissions.sql`
- `fix-content-views-permissions.sql`
- `fix-permissions.sql`
- `verify-permissions.sql`

### Documentation Files
- `ADMIN_ACCESS_GUIDE.md`
- `NOTIFICATION_SYSTEM_RESTORE_GUIDE.md`

### JavaScript Files
- `check-greg-user.js`

### Prisma Migrations
- `prisma/migrations/20251118032405_restore_conversation_message_tables/migration.sql`
- `prisma/migrations/20251118113752_add_supabase_permissions/migration.sql`
- `prisma/migrations/migration_lock.toml`

### Resources
- `Resources Content MDS/Construction_Outsourcing.md`

### Admin Pages
- `src/app/admin-login/page.tsx`
- `src/app/admin-signup/page.tsx`

### Case Study Pages (Root Level)
- `src/app/appraisal-listings-volume-increase/page.tsx`
- `src/app/build-a-team/page.tsx`
- `src/app/business-growth-through-offshore-staffing/page.tsx`
- `src/app/business-referral-partnerships/page.tsx`
- `src/app/business-systems-implementation-success/page.tsx`
- `src/app/construction-cost-reduction/page.tsx`
- `src/app/create-workforce/page.tsx`
- `src/app/customer-service-scaling/page.tsx`
- `src/app/easy-business-process-implementation/page.tsx`
- `src/app/exceptional-team-performance/page.tsx`
- `src/app/gradual-team-scaling-success/page.tsx`
- `src/app/hands-off-business-procedures/page.tsx`
- `src/app/hire-one-agent/page.tsx`
- `src/app/hiring-success-after-failures/page.tsx`
- `src/app/immediate-business-transformation/page.tsx`
- `src/app/industry-expert-validation/page.tsx`
- `src/app/long-term-partnership-success/page.tsx`
- `src/app/marketing-automation-implementation/page.tsx`
- `src/app/mobile-business-solutions/page.tsx`
- `src/app/mortgage-industry-transformation/page.tsx`
- `src/app/offshore-staffing-success/page.tsx`
- `src/app/proven-results/page.tsx`
- `src/app/quick-staff-onboarding/page.tsx`
- `src/app/reliable-recruitment-partner/page.tsx`
- `src/app/smooth-recruitment-process/page.tsx`
- `src/app/streamline-back-office/page.tsx`
- `src/app/successful-trial-hiring/page.tsx`
- `src/app/team-expansion-success/page.tsx`

### Other Pages
- `src/app/our-story/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/technical-digital/page.tsx`
- `src/app/virtual-assistants/page.tsx`

### Outsourcing Services Pages
- `src/app/outsourcing-services/insurance-outsourcing/page.tsx`
- `src/app/outsourcing-services/legal-outsourcing/page.tsx`
- `src/app/outsourcing-services/mortgage-outsourcing/page.tsx`
- `src/app/outsourcing-services/page.tsx`
- `src/app/outsourcing-services/property-management/page.tsx`
- `src/app/outsourcing-services/property-management-outsourcing/page.tsx`
- `src/app/outsourcing-services/real-estate-outsourcing/page.tsx`

### User Dashboard Pages
- `src/app/user-dashboard/candidates/[id]/page.tsx`

### UI Components
- `src/components/ui/dialog.tsx`
- `src/components/ui/floating-chat-button.tsx`

### Type Definitions
- `src/types/pg.d.ts`

---

## 2. Files Modified Between Branches

These files exist in both branches but have **different content**. The backup branch version may contain changes not present in the current branch:

### Configuration & Setup Files
- `AI_CHAT_SETUP.md`
- `CACHE_FIX_SUMMARY.md`
- `ENRICHMENT_IMPLEMENTATION_SUMMARY.md`
- `middleware.ts`
- `next.config.ts`
- `NEXT_STEP_RECOMMENDATION_SYSTEM.md`
- `NOTIFICATION_SCHEMA.md`
- `NOTIFICATION_TYPES_LIST.md`
- `package.json`
- `package-lock.json`
- `SOCKET_SERVER_README.md`
- `socket-server.js`
- `server.js`

### Documentation Files
- `BACKUP_BRANCH_MISSING_CHANGES.md`
- `BRANCH_COMPARISON_REPORT.md`
- `fix-prisma.md`

### Prisma Files
- `prisma/schema.prisma`
- `prisma/migrations/20251118032405_restore_conversation_message_tables/migration.sql`
- `prisma/migrations/20251118113752_add_supabase_permissions/migration.sql`
- `prisma/migrations/migration_lock.toml`

### API Routes

#### Admin API Routes
- `src/app/api/admin/enrich-lead/route.ts`
- `src/app/api/admin/leads/[userId]/progress/route.ts`
- `src/app/api/admin/leads/[userId]/route.ts`
- `src/app/api/admin/leads/initialize/route.ts`
- `src/app/api/admin/leads/progress/route.ts`
- `src/app/api/admin/leads/route.ts`
- `src/app/api/admin/notifications/[id]/read/route.ts`
- `src/app/api/admin/notifications/[id]/route.ts`
- `src/app/api/admin/notifications/delete-multiple/route.ts`
- `src/app/api/admin/notifications/read-all/route.ts`
- `src/app/api/admin/notifications/route.ts`
- `src/app/api/admin/notifications/unread-all/route.ts`
- `src/app/api/admin/quotations/route.ts`
- `src/app/api/admin/users/online/route.ts`
- `src/app/api/admin/video-call/create/route.ts`
- `src/app/api/admin/video-call/invite/route.ts`

#### General API Routes
- `src/app/api/ai-candidate-recommendations/route.ts`
- `src/app/api/ai-job-matching/route.ts`
- `src/app/api/analyze-candidate/route.ts`
- `src/app/api/anonymous-user-inquiry/route.ts`
- `src/app/api/apply-lead-capture-migration/route.ts`
- `src/app/api/auth/signup-simple/route.ts`
- `src/app/api/autocomplete/route.ts`
- `src/app/api/bpoc-candidates/route.ts`
- `src/app/api/bpoc-users/[id]/route.ts`
- `src/app/api/bpoc-users/route.ts`
- `src/app/api/chat/route.ts`
- `src/app/api/check-user-form-status/route.ts`
- `src/app/api/ensure-anonymous-user/route.ts`
- `src/app/api/explore-db/route.ts`
- `src/app/api/generate-job-description/route.ts`
- `src/app/api/get-existing-user/route.ts`
- `src/app/api/interview-request/route.ts`
- `src/app/api/pricing-progress/route.ts`
- `src/app/api/save-contact-info/route.ts`
- `src/app/api/test-autocomplete/route.ts`
- `src/app/api/test-bpoc-db/route.ts`
- `src/app/api/update-lead-capture/route.ts`
- `src/app/api/update-user-industry/route.ts`
- `src/app/api/user/next-step/route.ts`
- `src/app/api/user/profile/route.ts`

### Page Components

#### Admin Dashboard Pages
- `src/app/admin-dashboard/generate-blog/page.tsx`
- `src/app/admin-dashboard/leads/page.tsx`
- `src/app/admin-dashboard/leads/quotations/page.tsx`
- `src/app/admin-dashboard/page.tsx`
- `src/app/admin-login/page.tsx`
- `src/app/admin-signup/page.tsx`

#### Public Pages
- `src/app/about/page.tsx`
- `src/app/accounting-outsourcing/page.tsx`
- `src/app/appraisal-listings-volume-increase/page.tsx`
- `src/app/architectural-outsourcing/page.tsx`
- `src/app/blogs/page.tsx`
- `src/app/build-a-team/page.tsx`
- `src/app/business-growth-through-offshore-staffing/page.tsx`
- `src/app/business-referral-partnerships/page.tsx`
- `src/app/business-systems-implementation-success/page.tsx`
- `src/app/candidates/[id]/page.tsx`
- `src/app/case-studies/page.tsx`
- `src/app/clear-storage/page.tsx`
- `src/app/construction-cost-reduction/page.tsx`
- `src/app/construction-outsourcing/page.tsx`
- `src/app/create-workforce/page.tsx`
- `src/app/customer-service-scaling/page.tsx`
- `src/app/easy-business-process-implementation/page.tsx`
- `src/app/employee/[id]/page.tsx`
- `src/app/engineering-outsourcing/page.tsx`
- `src/app/exceptional-team-performance/page.tsx`
- `src/app/globals.css`
- `src/app/gradual-team-scaling-success/page.tsx`
- `src/app/graphic-design-outsourcing/page.tsx`
- `src/app/hands-off-business-procedures/page.tsx`
- `src/app/hire-one-agent/page.tsx`
- `src/app/hiring-success-after-failures/page.tsx`
- `src/app/immediate-business-transformation/page.tsx`
- `src/app/industry-expert-validation/page.tsx`
- `src/app/insurance-outsourcing/page.tsx`
- `src/app/layout.tsx`
- `src/app/legal-outsourcing/page.tsx`
- `src/app/long-term-partnership-success/page.tsx`
- `src/app/marketing-automation-implementation/page.tsx`
- `src/app/mobile-business-solutions/page.tsx`
- `src/app/mortgage-industry-transformation/page.tsx`
- `src/app/mortgage-outsourcing/page.tsx`
- `src/app/offshore-staffing-success/page.tsx`
- `src/app/our-story/page.tsx`
- `src/app/outsourcing-philippines/page.tsx`
- `src/app/outsourcing-services/insurance-outsourcing/page.tsx`
- `src/app/outsourcing-services/legal-outsourcing/page.tsx`
- `src/app/outsourcing-services/mortgage-outsourcing/page.tsx`
- `src/app/outsourcing-services/page.tsx`
- `src/app/outsourcing-services/property-management/page.tsx`
- `src/app/outsourcing-services/property-management-outsourcing/page.tsx`
- `src/app/outsourcing-services/real-estate-outsourcing/page.tsx`
- `src/app/outsourcing-to-india/page.tsx`
- `src/app/outsourcing-to-vietnam/page.tsx`
- `src/app/outsourcing-vs-offshoring/page.tsx`
- `src/app/page.tsx`
- `src/app/property-management-outsourcing/page.tsx`
- `src/app/proven-results/page.tsx`
- `src/app/quick-staff-onboarding/page.tsx`
- `src/app/real-estate-virtual-assistant/page.tsx`
- `src/app/reliable-recruitment-partner/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/seo-outsourcing/page.tsx`
- `src/app/seo-virtual-assistant/page.tsx`
- `src/app/smooth-recruitment-process/page.tsx`
- `src/app/social-media-virtual-assistant/page.tsx`
- `src/app/streamline-back-office/page.tsx`
- `src/app/successful-trial-hiring/page.tsx`
- `src/app/team-expansion-success/page.tsx`
- `src/app/technical-digital/page.tsx`
- `src/app/user-dashboard/call-invitations/page.tsx`
- `src/app/user-dashboard/candidates/[id]/page.tsx`
- `src/app/user-dashboard/candidates/page.tsx`
- `src/app/user-dashboard/chat/page.tsx`
- `src/app/user-dashboard/jobs/page.tsx`
- `src/app/user-dashboard/layout.tsx`
- `src/app/user-dashboard/page.tsx`
- `src/app/user-dashboard/profile/page.tsx`
- `src/app/user-dashboard/quotation/page.tsx`
- `src/app/user-dashboard/settings/page.tsx`
- `src/app/virtual-assistants/page.tsx`
- `src/app/virtual-real-estate-assistant-pricing/page.tsx`
- `src/app/we-got-talent/page.tsx`
- `src/app/what-does-a-real-estate-virtual-assistant-do/page.tsx`
- `src/app/what-is-outsourcing/page.tsx`

### Components

#### Layout Components
- `src/components/app-sidebar.tsx`
- `src/components/auth/UserGuard.tsx`
- `src/components/chart-area-interactive.tsx`
- `src/components/layout/BottomNav.tsx`
- `src/components/layout/ConditionalFooter.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/UserDashboardSidebar.tsx`

#### Maya Components
- `src/components/maya/MayaPricingForm.tsx`
- `src/components/maya/MayaTextField.tsx`

#### UI Components
- `src/components/nav-user.tsx`
- `src/components/ui/ai-chat-console.tsx`
- `src/components/ui/ai-description-generator.tsx`
- `src/components/ui/ai-industry-autocomplete.tsx`
- `src/components/ui/ai-role-autocomplete.tsx`
- `src/components/ui/anonymous-user-button.tsx`
- `src/components/ui/anonymous-user-modal.tsx`
- `src/components/ui/auth-buttons.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/change-reason-modal.tsx`
- `src/components/ui/command.tsx`
- `src/components/ui/dashboard-cards.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/dialog-videocall.tsx`
- `src/components/ui/enrichment-result-modal.tsx`
- `src/components/ui/floating-chat-button.tsx`
- `src/components/ui/focus-cards.tsx`
- `src/components/ui/incoming-call-modal.tsx`
- `src/components/ui/interview-request-modal.tsx`
- `src/components/ui/lead-details-modal.tsx`
- `src/components/ui/login-modal.tsx`
- `src/components/ui/maya-form-builder.tsx`
- `src/components/ui/notification-dropdown.tsx`
- `src/components/ui/pricing-calculator-modal.tsx`
- `src/components/ui/quote-summary-modal.tsx`
- `src/components/ui/shadcn-io/kanban/index.tsx`
- `src/components/ui/talent-card.tsx`
- `src/components/ui/top-candidate-with-matches.tsx`
- `src/components/ui/user-menu.tsx`

### Hooks
- `src/hooks/use-ai-autocomplete.ts`
- `src/hooks/use-api.ts`

### Library Files
- `src/lib/admin-auth-context.tsx`
- `src/lib/api.ts`
- `src/lib/auth-context.tsx`
- `src/lib/bpoc-database.ts`
- `src/lib/bpocPricingService.ts`
- `src/lib/candidateTrackingService.ts`
- `src/lib/chat-context.tsx`
- `src/lib/contentTrackingService.ts`
- `src/lib/create-notification.ts`
- `src/lib/currencyContext.tsx`
- `src/lib/emit-notification.ts`
- `src/lib/employeeRankingService.ts`
- `src/lib/fixedPricingService.ts`
- `src/lib/ipDetection.ts`
- `src/lib/pricingQuoteServiceClient.ts`
- `src/lib/prisma.ts`
- `src/lib/prisma-example.ts`
- `src/lib/query-client-provider.tsx`
- `src/lib/salaryLookupService.ts`
- `src/lib/socket-client.ts`
- `src/lib/socket-server.ts`
- `src/lib/user-auth-context.tsx`
- `src/lib/userEngagementService.ts`
- `src/lib/userQuoteService.ts`

### Type Definitions
- `src/types/pg.d.ts`

### Test Files
- `test-anonymous-chat.md`

---

## 3. Key Observations

### Missing Critical Files
1. **Admin Authentication Pages**: `admin-login` and `admin-signup` pages are missing
2. **Case Study Pages**: Multiple case study pages are in the backup but not in current branch
3. **Outsourcing Services Pages**: Entire `outsourcing-services` directory structure exists in backup
4. **UI Components**: `dialog.tsx` and `floating-chat-button.tsx` are missing
5. **Database Migrations**: Prisma migration files for conversation/message tables and permissions
6. **SQL Scripts**: Multiple permission and database fix scripts

### Modified Critical Files
1. **Configuration**: `package.json`, `middleware.ts`, `next.config.ts` have differences
2. **Prisma Schema**: Database schema differences between branches
3. **API Routes**: Many API routes have been modified
4. **Core Components**: Layout, navigation, and UI components have changes
5. **Library Files**: Core library files like `prisma.ts`, `socket-client.ts`, etc. have differences

---

## 4. Recommendations

1. **Review Missing Files**: Determine if missing files should be restored from backup branch
2. **Compare Modified Files**: Use `git diff` to review specific changes in modified files
3. **Database Migrations**: Ensure Prisma migrations from backup are applied if needed
4. **Test After Merge**: Thoroughly test functionality after restoring any missing files
5. **Documentation**: Review missing documentation files for important setup instructions

---

## 5. How to Use This Report

### To view specific file differences:
```bash
git diff origin/backup HEAD -- <file-path>
```

### To restore a missing file from backup:
```bash
git checkout origin/backup -- <file-path>
```

### To see all differences in a directory:
```bash
git diff origin/backup HEAD -- <directory-path>
```

---

**Note:** This comparison was generated by comparing the `backup` branch with the `emman-sa-main-backup` branch, focusing only on the `shoreagents-main` folder as requested.

