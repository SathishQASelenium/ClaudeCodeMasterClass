import { Page, Locator } from '@playwright/test';
import { BasePage } from '../../playwright_8_layer/pages/base/base.page';

/**
 * Layer 4: Page Object Layer
 * Encapsulates selectors and actions for the QASkills home page.
 */
export class QASkillsHomePage extends BasePage {
    readonly skipToMainContentLink: Locator;
    readonly logoLink: Locator;
    readonly searchSkillsLink: Locator;
    readonly darkModeToggle: Locator;
    readonly signInButton: Locator;
    readonly menuToggleButton: Locator;
    readonly browseSkillsButton: Locator;
    readonly getStartedButton: Locator;
    readonly copyCommandButton: Locator;
    readonly livePlaywrightLink: Locator;
    readonly dismissBannerButton: Locator;
    readonly leaderboardSearchLink: Locator;
    readonly viewAllButton: Locator;
    readonly gettingStartedGuideLink: Locator;
    readonly readBlogLink: Locator;
    readonly browseByAgentLink: Locator;

    constructor(page: Page) {
        super(page);
        this.skipToMainContentLink = page.getByRole('link', { name: 'Skip to main content' });
        this.logoLink = page.getByRole('link', { name: 'QASkills.sh' });
        this.searchSkillsLink = page.getByRole('link', { name: /Search skills/i });
        this.darkModeToggle = page.getByRole('button', { name: 'Switch to dark mode' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.menuToggleButton = page.getByRole('button', { name: 'Toggle menu' });
        this.browseSkillsButton = page.getByRole('link', { name: 'Browse Skills' });
        this.getStartedButton = page.getByRole('link', { name: 'Get Started' });
        this.copyCommandButton = page.getByRole('button', { name: 'Copy command' });
        this.livePlaywrightLink = page.getByRole('link', { name: /Live Playwright Starts 30 Jun/i });
        this.dismissBannerButton = page.getByRole('button', { name: 'Dismiss banner' });
        this.leaderboardSearchLink = page.getByRole('link', { name: /Search 450\+ skills/i });
        this.viewAllButton = page.getByRole('link', { name: 'View all' });
        this.gettingStartedGuideLink = page.getByRole('link', { name: 'Getting started guide' });
        this.readBlogLink = page.getByRole('link', { name: 'Read the blog' });
        this.browseByAgentLink = page.getByRole('link', { name: 'Browse by agent' });
    }

    async goto(): Promise<void> {
        await this.navigate('/');
        await this.waitForPageLoad();
    }

    /**
     * Navigate to the Browse Skills page from the hero section.
     */
    async goToBrowseSkills(): Promise<void> {
        await this.browseSkillsButton.click();
    }

    /**
     * Navigate to the Get Started page from the hero section.
     */
    async goToGetStarted(): Promise<void> {
        await this.getStartedButton.click();
    }

    /**
     * Toggle the site theme between light and dark mode.
     */
    async toggleDarkMode(): Promise<void> {
        await this.darkModeToggle.click();
    }

    /**
     * Open the site navigation menu.
     */
    async openMenu(): Promise<void> {
        await this.menuToggleButton.click();
    }

    /**
     * Click the sign-in button in the header.
     */
    async signIn(): Promise<void> {
        await this.signInButton.click();
    }

    /**
     * Copy the CLI install command shown in the hero section.
     */
    async copyInstallCommand(): Promise<void> {
        await this.copyCommandButton.click();
    }

    /**
     * Dismiss the top promotional banner.
     */
    async dismissPromoBanner(): Promise<void> {
        await this.dismissBannerButton.click();
    }

    /**
     * Open the live Playwright course link shown in the header banner.
     */
    async openLivePlaywrightCourse(): Promise<void> {
        await this.livePlaywrightLink.click();
    }

    /**
     * Open the leaderboard page from the hero section.
     */
    async openLeaderboard(): Promise<void> {
        await this.viewAllButton.click();
    }

    /**
     * Open a category card link by visible category title.
     * @param categoryName The category text shown on the card.
     */
    async openCategoryCard(categoryName: string): Promise<void> {
        await this.page.getByRole('link', { name: new RegExp(categoryName, 'i') }).first().click();
    }

    /**
     * Open a footer resource link by its visible label.
     * @param label The footer link text to click.
     */
    async openFooterLink(label: string): Promise<void> {
        await this.page.getByRole('link', { name: new RegExp(label, 'i') }).first().click();
    }
}
