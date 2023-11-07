import PocketBase from 'pocketbase';
import { expect, test } from '@playwright/test';
const pb = new PocketBase(process.env.PUBLIC_API_URL)

test('the user can see multiple conference links', async ({ page }) => {
    await page.goto('/');

	const ul = await page.$('ul')

	const listItemCount = await ul?.$$eval('li > a', links => links.length)
	expect(listItemCount).toBe(2);
});

test('can visit a conference page', async ({ page }) => {
	await page.goto('/');

	const href = await page.$eval('ul > li:first-child > a', a => a.href);
	await page.goto(href);

	expect(page.url()).toBe(href);
});

test('can go to all active conference URLs', async ({ page }) => {
    const filter = pb.filter('is_active = true')
    const resultList = await pb.collection('Conference').getList(1, 50, {
        filter,
        fields: 'year,season',
    });

	for (const conf of resultList.items) {
		const url = `/${conf.year}/${conf.season}`

		await page.goto(url)

		expect(page.url()).toContain(url)
	}
});

test('can go to a talks page', async ({ page }) => {
    await page.goto('/2023/spring');

	await page.click('text=Watch')

	await expect(page.locator('h1')).toBeVisible()

	await expect(page.getByRole('link', { name: 'Go Back'})).toBeVisible()
});