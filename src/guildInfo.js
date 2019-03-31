var guildInfo = [
	{
		name: "the Golgari Swarm",
		image: "images/golgari.jpg",
		description: "While most Ravnicans prefer not to think about icky things like mortality and decay, the Golgari Swarm embraces this messy and endless cycle of creation and destruction. In fact, members of the black and green–aligned Golgari value the balance between life and death above all else. Members of the Swarm mostly live underground, dwelling in Ravnica's forgotten and unwanted places, foraging for refuse and discarded treasures from the world above. They are also talented farmers, providing Ravnica with the vast majority of its food production. The Golgari are the largest guild on Ravnica—in large part because of their love of reanimation magic, which they use quite liberally. To the Golgari, power is both incremental and inevitable. The more things die, the more the Golgari Swarm grows."
	},
	{
		name: "the Gruul Clans",
		image: "images/gruul.jpg",
		description: "The Gruul were given stewardship over Ravnica's wild places and natural beauty. But as the city began to sprawl out, the other nine guilds refused to heed the Gruul's warnings as they destroyed more and more of the wilderness. The Gruul were ignored, marginalized, and enslaved. Anger fermented. The guild's leadership structure crumbled. With nothing left to protect and conserve, after centuries of being ignored and oppressed, the Gruul became agents of chaos and destruction. It has been a long time since the Gruul Clans were unified under a single leader. Most members of the Gruul are willing to follow whomever seems like the strongest warrior at any given time."
	},
	{
		name: "the Azorius Senate",
		image: "images/azorius.jpg",
		description: "As Ravnica's foremost political body, the Azorius Senate is in charge of the legislation, enforcement, and arbitration of laws throughout the city. They believe that the rule of law is the only thing that stands between Ravnica and chaos; therefore, it is their right to create and enforce the law as they see fit. A little bureaucracy and the occasional injustice? Prices worth paying in order to prevent Ravnica from descending into anarchy. As you can imagine, many of the other guilds find the Azorius to be aloof, pedantic, and just plain no fun."
	},
	{
		name: "the Boros Legion",
		image: "images/boros.jpg",
		description: "Might may not always make right, but the Boros Legion certainly believes in using their strength to prevent Ravnica from becoming a chaotic and unjust place. Members of the white and red–aligned Boros value honor and glory above all else, organizing their guild in a military-style hierarchy designed to keep the peace and enforce the law. The Boros consider themselves to be the military and peacekeeping arm of Ravnican society. If there's an uprising anywhere on Ravnica, the Boros will be there to quell the dispute. While many Ravnicans consider the Boros to be self-righteous and rigid, there is no denying that they provide much-needed protection for the guildless without asking for anything in return."
	},
	{
		name: "the Izzet League",
		image: "images/izzet.jpg",
		description: "Members of the blue and red–aligned Izzet value invention and discovery above all else, though they rarely have the patience for prolonged experimentation. This reckless but passionate experimentation has made the Izzet League into Ravnica's most successful civic engineers. The iconic brass boilers, roadways, and canals that crisscross Ravnica are the result of Izzet imagination and innovation. Granted, so was that day when the entire sky turned bright orange for a while, but the Izzet don't spend too much time dwelling on failure. They simply move on to their next big idea."
	},
	{
		name: "the Simic Combine",
		image: "images/simic.jpg",
		description: "At its heart, Simic philosophy comes back to the search for balance between two contradictory forces: the Holdfast and the Upwelling. The Holdfast represents the importance of staying rooted in the natural world, much the way a piece of kelp remains fastened to the ocean floor. The Upwelling represents the importance of constant improvement and renewal, much the way ocean currents spread nutrients throughout the sea. It is through this metaphor that the Simic approach to the world starts to make sense—remaining connected to nature is essential, yes, but that doesn't mean that we can't always improve upon it. Many of its members are scientists who spend large portions of their lives working in secret experimental laboratories. Others are physicians and surgeons, since the Simic Combine are technically in charge of maintaining Ravnica's public health."
	},
	{
		name: "the Orzhov Syndicate",
		image: "images/orzhov.png",
		description: "Do you want to live forever? More importantly, do you want to be rich and powerful forever? The Orzhov Syndicate does, and they've got the infrastructure to make it happen . . . for themselves, at least. he Orzhov began their life as a proper religious organization, and they still pay lip service to that idea from time to time. The Orzhov still employs priests, for example, and their guild hall is called Orzhova, the Church of Deals. These days, however, the 'deals' part of that name takes precedence over the 'church' part. There aren't many businesses on Ravnica that aren't either run by or in debt to the Orzhov, and the Syndicate's push into organized crime is only becoming more brazen. The Syndicate is organized into a loose affiliation of cartels, each of which is led by their own priest or kingpin. Maintaining a rigid hierarchy is important to the Orzhov, where your position in the guild is a matter of identity and power."
	},
	{
		name: "House Dimir",
		image: "images/dimir.jpg",
		description: "Are you already an agent of House Dimir? I have no way of knowing for sure, so I'll speak carefully. Dimir is built on a network of secrets and backroom deals, and it can count Ravnica's best spies and assassins among its ranks. Members of the blue and black–aligned Dimir value deception and manipulation above all else. Most members of House Dimir know very little about the guild and its leadership. All pertinent information about House Dimir is on a strict need-to-know basis, even for those who serve it with unflinching loyalty."
	},
	{
		name: "the Cult of Rakdos",
		image: "images/rakdos.png",
		description: "Rules—who needs 'em? Certainly not the Cult of Rakdos. To a member of the Cult, rules are a great way to waste the all-too-brief spark of life that comes before the inevitability of death. Chaos is inevitable, life is short, death is natural, planning for the future is meaningless; let's party. While many of their performances are purely hedonistic (not to mention highly destructive), the Rakdos love to parody and lampoon authority as well. They don't much care for any guild that seeks power, viewing all external leadership as a threat to their individual freedoms. Beyond their work as entertainers, some of the more respectable Cult members are often shunted into service industry jobs while the less respectable Cultists end up as assassins or laborers. As you can imagine, the Cult of Rakdos doesn't exactly have a great reputation among the rest of Ravnican society. But while the Cult's penchant for anarchy and cruelty is looked down on, it is widely accepted that the Rakdos are incomparable performers and hosts."
	},
	{
		name: "the Selesnya Conclave",
		image: "images/selesnya.jpg",
		description: "Members of the white and green–aligned Selesnya value collectivist ideals and the natural world above all else, believing that the best path to peace and happiness is through unity, togetherness, and preservation. While Selesnya seeks to achieve peace through unity, don't mistake them for pacifists. Their army may not be as disciplined as the Boros, but it is still both large and powerful. Wolves, knights, dryads, elves, elementals, and even massive armor-clad wurms fight for the utopian vision of the Conclave."
	},
];

export default guildInfo;