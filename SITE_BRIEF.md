# AccessoRex website brief

**Domain:** accessorex.app
**Publisher:** Perception Labs LLC
**Assets in this folder:** `assets/app-icon.png` (1024×1024 app icon from the Xcode project)

## Pages

- `index.html`: the landing page. It has the icon, the hero copy, features, a wardrobe showcase and an App Store badge.
- `support.html`: an FAQ and a contact section.
- `privacy.html`: the privacy policy.

The app isn't on the App Store yet. Use a "Coming soon to the App Store" placeholder for the badge and link, kept in one spot so it's easy to swap later. Leave 3–4 clearly marked slots for screenshots; none exist yet.

## Design

Design from scratch. **Don't** base anything on ComeCloser or any other Perception Labs site. Aim for playful, bright and arcade-like, to suit a dinosaur that wears hats. Make it fully responsive and mobile-first, with no framework needed. A light amount of motion, such as a hopping dino or bricks, is welcome as long as it stays quick to load.

**Logo:** there's no separate logo file. Use `assets/app-icon.png` as both the logo and the hero image: a green T-Rex in a potato hat and red shoes, on a sky-blue background.

**Starting palette, taken from the game's menu screen.** Adjust freely:

| Role | Hex |
|---|---|
| Sky | `#87CFFA` |
| Grass green | `#5CAD47` |
| Primary button green | `#1FB852` |
| Coin / highlight yellow | `#FFC70D` |
| Navy for headings and text | `#1A4D99` |
| Text on yellow | `#401F00` |

**Font:** the game uses Avenir Next (Heavy for titles, Bold and Medium for the rest). Avenir Next isn't licensed for the web, so use `"Avenir Next", "Nunito", system-ui, sans-serif` and load Nunito from Google Fonts. You can choose a different friendly, rounded display face if it fits better.

## Landing-page copy (use as written)

> **AccessoRex — A Prehistoric Hop Through Dino Couture**
>
> AccessoRex is a fast-paced iOS arcade game where style meets survival. Guide your plucky little dino across a crumbling chain of bricks, timing each hop to clear ever-widening gaps as the world scrolls faster and faster beneath your feet.
>
> But this isn't just about staying alive — it's about looking fabulous while you do it. Earn coins, level up, and unlock a growing wardrobe of ridiculous accessories: party hats, crowns, pirate tricorns, mohawks, and yes — a potato. Drape on pearls, a gold chain, or a spiked collar. Zip into a tuxedo, a denim vest, or a leather jacket. Lace up red boots or gold shoes. Or go all in with a full persona — Granny, Dapper Gent, Pirate, Cowboy, Hip Hop Artist, or Rockstar. Every run is a chance to express yourself, one accessory at a time.
>
> **Features**
> - One-tap controls — easy to learn, tough to master
> - Procedurally generated levels that get trickier the further you go
> - 28 unlockable accessories — hats, necklaces, vests, jackets, and shoes — mix and match however you like
> - 6 full-outfit personas, with more on the way: skaters, bikers, lumberjacks, ninjas, and seasonal surprises
> - Earn coins as you play, or grab the ad-free upgrade for pure, uninterrupted hopping
> - Designed for iPhone and iPad, iOS 16 and up
>
> Dress your dino. Dodge the drops. Rule the Rex-runway.

### Full wardrobe (for a showcase section; don't invent any items)

- **Hats (11):** Party Hat, Potato Hat, Crown, Big Bow, Baseball Cap, Grey Wig, Top Hat, Cowboy Hat, Pirate Tricorn, Snapback, Mohawk
- **Necklaces (7):** Pearls, Bone Necklace, Gem Necklace, Bandana, Skull Pendant, Gold Chain, Spiked Collar
- **Vests and jackets (7):** Red Vest, Rainbow Vest, Tuxedo, Striped Vest, Denim Vest, Hoodie, Leather Jacket
- **Shoes (3):** Red Boots, Blue Sneakers, Gold Shoes
- **Personas (6), each a full matching outfit:** Granny, Dapper Gent, Pirate, Cowboy, Hip Hop Artist, Rockstar

Items unlock as you reach levels, and you buy them with coins you earn in the game. There are 20 levels on an Adventure Map. They speed up and get harder as you go: narrower bricks, wider gaps and faster scrolling.

## Support page facts (FAQ)

- **Price:** free to download. An interstitial ad plays before levels. Optional reward videos give an in-game bonus, such as an extra life or coins.
- **Remove Ads:** a one-time $2.99 purchase. It turns off the ads that play before levels. The optional reward videos stay available. If a purchase doesn't show up, tap **Restore** on the main menu.
- **Devices:** iPhone and iPad running iOS or iPadOS 16 or later. Portrait only.
- **Progress:** saved only on the device (level, high score, coins, unlocks and the current outfit). There's no account, sign-in or cloud sync. Deleting the app erases progress. Remove Ads can be restored after reinstalling, but coins and unlocks can't.
- **Refunds:** handled by Apple at https://reportaproblem.apple.com
- **Bugs:** email support with the device model, iOS version, and what happened.
- **Coming soon:** more personas.

## Privacy policy facts

Write the policy in plain language, with a short summary at the top.

- **Age rating:** 4+, suitable for all ages.
- **No accounts and no server:** the app has no sign-in and no backend of its own. Game progress is stored only on the device and never sent to Perception Labs.
- **Ads:** served by **Google AdMob**. AdMob is set up for a family audience, so **ads are not personalized** and are age-appropriate. The app doesn't track users across other apps or websites, and it doesn't ask for tracking permission. To deliver ads, measure them and prevent fraud, Google may still process limited technical information, such as IP address, device type and ad interactions. Link to Google's explanation: https://policies.google.com/technologies/partner-sites
- **Purchases:** processed entirely by Apple. Perception Labs never sees names, Apple IDs or payment details.
- **Contact:** Perception Labs only receives personal information if someone chooses to email support. It's used only to reply, and it isn't shared or added to any mailing list.
- **Children:** Perception Labs doesn't knowingly collect personal information from children. Ads are non-personalized. A parent with a concern can email the address below.
- **Changes:** updates will be posted on this page with a "Last updated" date.

## Contact

**support@accessorex.app**, for both support and privacy questions. Use a plain `mailto:` link and no form. Define the address once (for example, as a single constant or in one include) so it's easy to change.
