<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ==========================================
// GENERAL PAGES
// ==========================================
Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/success-stories', function () {
    return Inertia::render('SuccessStories');
});

Route::get('/migrate', function () {
    return Inertia::render('Migrate');
});

Route::get('/blogs', function () {
    return Inertia::render('Blogs/Index');
});

Route::get('/blogs/{slug}', function ($slug) {
    return Inertia::render('Blogs/Detail', ['slug' => $slug]);
});

Route::get('/faqs', function () {
    return Inertia::render('Faqs');
});

Route::get('/hr-solutions', function () {
    return Inertia::render('HR');
});

// ==========================================
// CANADA IMMIGRATION
// ==========================================
Route::get('/canada-immigration', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'main']);
});

Route::get('/canada-immigration/express-entry-program', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'express-entry']);
});

Route::get('/canada-immigration/provincial-nominee-program', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'pnp']);
});

Route::get('/canada-immigration/business-investment-visa', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'business']);
});

Route::get('/canada-immigration/family-sponsorship', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'family']);
});

Route::get('/canada-immigration/work-permits', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'work-permit']);
});

// ==========================================
// AUSTRALIA IMMIGRATION
// ==========================================
Route::get('/australia-immigration', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'main']);
});

Route::get('/australia-immigration/skilled-migration-visa', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'skilled']);
});

Route::get('/australia-immigration/employer-sponsored-visa', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'employer']);
});

Route::get('/australia-immigration/business-investment-visa', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'business']);
});

Route::get('/australia-immigration/regional-state-specific', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'regional']);
});

Route::get('/australia-immigration/family-partner-visa', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'family']);
});

// ==========================================
// NEW ZEALAND IMMIGRATION
// ==========================================
Route::get('/new-zealand-immigration', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'main']);
});

Route::get('/new-zealand-immigration/skilled-migration', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'skilled']);
});

Route::get('/new-zealand-immigration/skilled-migration/skilled-migrant-category', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'skilled-migrant']);
});

Route::get('/new-zealand-immigration/employment-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'employment']);
});

Route::get('/new-zealand-immigration/business-investment-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'business']);
});

Route::get('/new-zealand-immigration/family-sponsorship', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'family']);
});

// ==========================================
// UK IMMIGRATION
// ==========================================
Route::get('/uk-immigration', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'main']);
});

Route::get('/uk-immigration/skilled-worker-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'skilled-worker']);
});

// UK Skilled Worker Sub-Visas
Route::get('/uk-immigration/skilled-worker-visa/skilled-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'skilled-visa-tier-2']);
});

Route::get('/uk-immigration/skilled-worker-visa/health-care-worker-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'health-care-worker']);
});

Route::get('/uk-immigration/skilled-worker-visa/uk-expansion-worker-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'expansion-worker']);
});

Route::get('/uk-immigration/skilled-worker-visa/global-talent-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'global-talent']);
});

// UK Business & Innovator Visa
Route::get('/uk-immigration/business-innovator-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'business-innovator']);
});

Route::get('/uk-immigration/business-innovator-visa/innovator-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'innovator-visa']);
});

Route::get('/uk-immigration/business-innovator-visa/start-up-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'start-up-visa']);
});

Route::get('/uk-immigration/business-innovator-visa/investor-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'investor-visa']);
});

// UK Family & Dependent Visa
Route::get('/uk-immigration/family-dependent-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'family-dependent']);
});

Route::get('/uk-immigration/family-dependent-visa/spouse-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'spouse-visa']);
});

Route::get('/uk-immigration/family-dependent-visa/parent-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'parent-visa']);
});

Route::get('/uk-immigration/family-dependent-visa/dependent-child-visa', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'dependent-child-visa']);
});

// UK PR & Citizenship
Route::get('/uk-immigration/pr-citizenship', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'pr-citizenship']);
});

Route::get('/uk-immigration/pr-citizenship/indefinite-leave-to-remain', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'ilr']);
});

Route::get('/uk-immigration/pr-citizenship/british-citizenship', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'british-citizenship']);
});

// UK Catch-alls
Route::get('/uk-immigration/skilled-worker-visa/{any}', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'skilled-worker']);
});
Route::get('/uk-immigration/business-innovator-visa/{any}', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'business-innovator']);
});
Route::get('/uk-immigration/family-dependent-visa/{any}', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'family-dependent']);
});
Route::get('/uk-immigration/pr-citizenship/{any}', function () {
    return Inertia::render('Immigration/UKVisaPage', ['visaType' => 'pr-citizenship']);
});

// US IMMIGRATION BELOW

// ==========================================
// USA IMMIGRATION
// ==========================================
Route::get('/usa-immigration', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'main']);
});

Route::get('/usa-immigration/temporary-work-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'temporary-work']);
});

Route::get('/usa-immigration/temporary-work-visa/h-1b-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'h-1b']);
});

Route::get('/usa-immigration/temporary-work-visa/l-1-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'l-1']);
});

Route::get('/usa-immigration/temporary-work-visa/o-1-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'o-1']);
});

Route::get('/usa-immigration/business-investment-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'business-investment']);
});

Route::get('/usa-immigration/family-spouse-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'family-spouse']);
});

Route::get('/usa-immigration/permanent-work-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'permanent-work']);
});

Route::get('/usa-immigration/permanent-work-visa/eb-1-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'eb-1']);
});

Route::get('/usa-immigration/permanent-work-visa/eb-2-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'eb-2']);
});

Route::get('/usa-immigration/permanent-work-visa/eb-3-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'eb-3']);
});

Route::get('/usa-immigration/permanent-work-visa/eb-4-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'eb-4']);
});

Route::get('/usa-immigration/business-investment-visa/e-2-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'e-2']);
});

Route::get('/usa-immigration/business-investment-visa/eb-5-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'eb-5']);
});

Route::get('/usa-immigration/family-spouse-visa/k-1-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'k-1']);
});

Route::get('/usa-immigration/family-spouse-visa/ir-1-visa', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'ir-1']);
});

Route::get('/usa-immigration/family-spouse-visa/parent-sibling-sponsorship', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'parent-sibling']);
});

// ==========================================
// NEW ZEALAND IMMIGRATION
// ==========================================
// Catch-all routes for sub-pages to prevent 404s and show parent content
// Express Entry Sub-Routes
Route::get('/canada-immigration/express-entry-program/federal-skilled-worker', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'federal-skilled-worker']);
});

Route::get('/canada-immigration/express-entry-program/federal-skilled-trades', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'federal-skilled-trades']);
});

Route::get('/canada-immigration/express-entry-program/canadian-experience-class', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'canadian-experience-class']);
});

Route::get('/canada-immigration/express-entry-program/crs-calculator', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'crs-calculator']);
});

Route::get('/canada-immigration/express-entry-program/ita', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'ita']);
});

Route::get('/canada-immigration/express-entry-program/draw-results', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'draw-results']);
});

Route::get('/canada-immigration/express-entry-program/{any}', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'express-entry']);
});

Route::get('/canada-immigration/provincial-nominee-program/alberta-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'alberta-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/british-columbia-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'bc-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/ontario-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'ontario-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/saskatchewan-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'saskatchewan-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/manitoba-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'manitoba-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/new-brunswick-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'new-brunswick-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/nova-scotia-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'nova-scotia-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/prince-edward-island-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'pei-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/yukon-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'yukon-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/newfoundland-labrador-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'newfoundland-labrador-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/northwest-territories-pnp', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'northwest-territories-pnp']);
});

Route::get('/canada-immigration/provincial-nominee-program/{any}', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'pnp']);
});

Route::get('/canada-immigration/work-permits/open-work-permit', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'open-work-permit']);
});

Route::get('/canada-immigration/work-permits/lmia-work-permit', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'lmia-work-permit']);
});

Route::get('/canada-immigration/work-permits/employer-specific-work-permit', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'employer-specific-work-permit']);
});

Route::get('/canada-immigration/work-permits/global-talent-stream', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'global-talent-stream']);
});

Route::get('/canada-immigration/work-permits/{any}', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'work-permit']);
});

Route::get('/canada-immigration/business-investment-visa/entrepreneur-streams', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'entrepreneur-streams']);
});

Route::get('/canada-immigration/business-investment-visa/{any}', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'business']);
});

Route::get('/canada-immigration/family-sponsorship/spousal-sponsorship', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'spousal-sponsorship']);
});

Route::get('/canada-immigration/family-sponsorship/dependent-child-sponsorship', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'dependent-child-sponsorship']);
});

Route::get('/canada-immigration/family-sponsorship/super-visa', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'super-visa']);
});

Route::get('/canada-immigration/family-sponsorship/{any}', function () {
    return Inertia::render('Immigration/CanadaVisaPage', ['visaType' => 'family']);
});

// Australia Routes
Route::get('/australia-immigration/skilled-migration-visa/subclass-189', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-189']);
});
Route::get('/australia-immigration/skilled-migration-visa/subclass-190', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-190']);
});
Route::get('/australia-immigration/skilled-migration-visa/subclass-491', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-491']);
});
Route::get('/australia-immigration/skilled-migration-visa/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'skilled']);
});

Route::get('/australia-immigration/employer-sponsored-visa/subclass-482', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-482']);
});
Route::get('/australia-immigration/employer-sponsored-visa/subclass-186', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-186']);
});
Route::get('/australia-immigration/employer-sponsored-visa/subclass-494', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-494']);
});
Route::get('/australia-immigration/employer-sponsored-visa/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'employer']);
});

Route::get('/australia-immigration/business-investment-visa/subclass-188', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-188']);
});
Route::get('/australia-immigration/business-investment-visa/subclass-888', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-888']);
});
Route::get('/australia-immigration/business-investment-visa/subclass-891', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-891']);
});
Route::get('/australia-immigration/business-investment-visa/subclass-858', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-858']);
});
Route::get('/australia-immigration/business-investment-visa/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'business']);
});

Route::get('/australia-immigration/family-partner-visa/subclass-820-801', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-820-801']);
});
Route::get('/australia-immigration/family-partner-visa/subclass-309-100', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-309-100']);
});
Route::get('/australia-immigration/family-partner-visa/subclass-103-143', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-103-143']);
});
Route::get('/australia-immigration/family-partner-visa/subclass-101', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'subclass-101']);
});
Route::get('/australia-immigration/family-partner-visa/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'family']);
});

Route::get('/australia-immigration/regional-state-specific/victoria', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'victoria']);
});
Route::get('/australia-immigration/regional-state-specific/new-south-wales', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'new-south-wales']);
});
Route::get('/australia-immigration/regional-state-specific/queensland', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'queensland']);
});
Route::get('/australia-immigration/regional-state-specific/south-australia', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'south-australia']);
});
Route::get('/australia-immigration/regional-state-specific/western-australia', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'western-australia']);
});
Route::get('/australia-immigration/regional-state-specific/tasmania', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'tasmania']);
});
Route::get('/australia-immigration/regional-state-specific/northern-territory', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'northern-territory']);
});
Route::get('/australia-immigration/regional-state-specific/australian-capital-territory', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'australian-capital-territory']);
});
Route::get('/australia-immigration/regional-state-specific/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'regional']);
});

// New Zealand Routes
Route::get('/new-zealand-immigration/skilled-migration/green-list-occupations', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'green-list-occupations']);
});
Route::get('/new-zealand-immigration/skilled-migration/work-to-residence-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'work-to-residence-visa']);
});
Route::get('/new-zealand-immigration/skilled-migration/{any}', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'skilled']);
});

Route::get('/new-zealand-immigration/employment-visa/accredited-employer-work-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'accredited-employer-work-visa']);
});
Route::get('/new-zealand-immigration/employment-visa/essential-skills-work-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'essential-skills-work-visa']);
});
Route::get('/new-zealand-immigration/employment-visa/working-holiday-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'working-holiday-visa']);
});
Route::get('/new-zealand-immigration/employment-visa/{any}', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'employment']);
});

Route::get('/new-zealand-immigration/business-investment-visa/investor-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'investor-visa']);
});
Route::get('/new-zealand-immigration/business-investment-visa/entrepreneur-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'entrepreneur-visa']);
});
Route::get('/new-zealand-immigration/business-investment-visa/global-impact-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'global-impact-visa']);
});
Route::get('/new-zealand-immigration/business-investment-visa/{any}', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'business']);
});

Route::get('/new-zealand-immigration/family-sponsorship/partner-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'partner-visa']);
});
Route::get('/new-zealand-immigration/family-sponsorship/parent-residency-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'parent-residency-visa']);
});
Route::get('/new-zealand-immigration/family-sponsorship/dependent-child-visa', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'dependent-child-visa']);
});
Route::get('/new-zealand-immigration/family-sponsorship/{any}', function () {
    return Inertia::render('Immigration/NewZealandVisaPage', ['visaType' => 'family']);
});

Route::get('/usa-immigration/business-investment-visa/{any}', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'business-investment']);
});

Route::get('/usa-immigration/family-spouse-visa/{any}', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'family-spouse']);
});

Route::get('/australia-immigration/regional-state-specific/{any}', function () {
    return Inertia::render('Immigration/AustraliaVisaPage', ['visaType' => 'regional']);
});

Route::get('/usa-immigration/permanent-work-visa/{any}', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'permanent-work']);
});

Route::get('/usa-immigration/temporary-work-visa/{any}', function () {
    return Inertia::render('Immigration/USAVisaPage', ['visaType' => 'temporary-work']);
});

// Schengen Routes
Route::get('/migrate/schengen', function () {
    return Inertia::render('Immigration/SchengenVisaPage', ['visaType' => 'main']);
});
Route::get('/migrate/schengen/visit', function () {
    return Inertia::render('Immigration/SchengenVisaPage', ['visaType' => 'visit']);
});
Route::get('/migrate/schengen/work', function () {
    return Inertia::render('Immigration/SchengenVisaPage', ['visaType' => 'work']);
});
Route::get('/migrate/schengen/blue-card', function () {
    return Inertia::render('Immigration/SchengenVisaPage', ['visaType' => 'blue-card']);
});
Route::get('/migrate/schengen/{any}', function () {
    return Inertia::render('Immigration/SchengenVisaPage', ['visaType' => 'main']);
});

// ==========================================
// LEGAL & MISC
// ==========================================
Route::get('/privacy-policy', function () {
    return Inertia::render('Legal/PrivacyPolicy');
});

Route::get('/terms-and-conditions', function () {
    return Inertia::render('Legal/TermsConditions');
});

// ==========================================
// WORK, STUDY, VISIT, COACHING (Catch-all)
// ==========================================
Route::get('/work', function () {
    return Inertia::render('Work/WorkPage');
});

Route::get('/events', function () {
    return Inertia::render('Events');
});

Route::get('/events/detail', function () {
    return Inertia::render('EventDetail');
});

Route::get('/find-jobs', function () {
    return Inertia::render('Jobs');
});

Route::get('/study', function () {
    return Inertia::render('Study/StudyPage', ['visaType' => null]);
});

Route::get('/study/{any}', function ($any = null) {
    return Inertia::render('Study/StudyPage', ['visaType' => $any]);
})->where('any', '.*');

Route::get('/visit', function () {
    return Inertia::render('Visit/VisitPage', ['visaType' => null]);
});

Route::get('/visit/{any}', function ($any = null) {
    return Inertia::render('Visit/VisitPage', ['visaType' => $any]);
})->where('any', '.*');

Route::get('/coaching', function () {
    return Inertia::render('Coaching/CoachingPage', ['visaType' => null]);
});

Route::get('/coaching/{any}', function ($any = null) {
    return Inertia::render('Coaching/CoachingPage', ['visaType' => $any]);
})->where('any', '.*');

