this.populateDatabase = function (SpellsService) {
    console.log("POPULATING DATABASE!");

    var addedSpells = [];
    var spells = [
        {
            name: "Rune Spell of Protection",
            summary: "This particular rune magick spell will offer protection from outside forces, but also from forces within us. We don’t always need protection from the outside, but may need a little boost in harmony within ourselves and with others around us. This spell will provide a protection barrier on all aspects.",
            image: "http://wiccanspells.info/wp-content/uploads/2017/06/rune-magick-etsy.jpg",
            difficulty: 3,
            ingredients: [
                "5 white candles",
                "An instrument to carve runes into the candles",
                "Incense: Any protection scent, such as cinnamon, myrrh, or sage",
                "Salt",
                "Oil to dress your candles (this is optional, and can be any oil that makes you feel protected, or alternatively you can use your astrological sign essential oil)"
            ],
            instructions: "1. Start by selecting a candle from the five that you want to represent yourself. Carve into this candle the rune Algiz (pictured below) and write your name beneath it: 2. Place the other four candles around your altar in the north, east, south, and west corners. 3. Place the candle that represents you in the center of the other four. 4. Spread your salt in a circle around the candles, and leave a small pinch of salt directly in front of you. 5. Light your incense and clear your mind of all negative thoughts. 6. Light the candle to the east and say: Powers of Air, hear my call grant me your protection that is all I ask for! 7. Light the candle to the south and state: Powers of Fire, hear my call grant me your protection that is all I ask for! 8. Light the western candle and say: Powers of Water, hear my call grant me your protection that is all I ask for! 9. Finally, light the candle to the north and state: Powers of Earth, hear my call grant me your protection that is all I ask for! 10. Look up to the skies and call out: Powers of High, listen to my plea, May I always be protected by thee! 11. Light your candle and say: Banish my fears! I light with your light, I am guarded, well-protected and with a shield I rise! 12. Stare into the flame and visualize a protective light surrounding you. The light is warm, glowing, soothing. Breathe in the light, and let it fill you with shining protection. 13. Open your eyes and say: Air protects me! Fire protects me! Water protects me! Earth protects me! The God(s or Divine) protect(s) me! I am whole again, with my shield I move on! 14. Meditate until you’re comfortable and feel protected, and then let the candles burn. Bury the remains and sprint the salt from the ritual around the area where they’re placed.",
            category: "Rune Magick",
            link: "http://wiccanspells.info/rune-spell-of-protection/",
        },
        {
            name: "Tiger’s Eye Confidence Spell",
            summary: "This is a simple confidence spell to increase your self-esteem and self-worth. It uses tiger’s eye, a crystal which strengthens the solar plexus chakra. The solar plexus is the seat of our will, and a weakened solar plexus may manifest in lack of confidence. Tiger’s eye is also a crystal that combines solar and earth energy, producing a vibration of grounded confidence.",
            image: "http://wiccanspells.info/wp-content/uploads/2016/04/tigers-eye-crystals-300x254.jpg",
            difficulty: 3,
            ingredients: [
                "A golden candle",
                "Tiger’s eye or orgonite with tiger’s eye",
                "Sandalwood essential oil",
                "Clothes that are red, yellow or orange in colour (optional)"
            ],
            instructions: "Lay out all your tools in the centre of what will be your circle. Begin by meditating on what you would like the outcome of your spell to be. Be sure to be clear about your desired outcome – in what areas of life would you like more confidence? How would you like to act in future situations? The more specific you are, the better your results will be. Now cast your circle, and sit in the middle of it facing south (which corresponds to the element of Fire). Take the golden candle, and place three drops of sandalwood on it. Rub the sandalwood into the candle, while saying the following: I call upon the energies of the Sun and the Earth, To help me find my confidence and self-worth. Next, light the candle and place it in front of you. Take the tiger’s eye and cup it in your hands. Now, look into the flame, and as you do so, imagine a golden light shining down on you from above (if it helps you to visualise, you can close your eyes). Make this light as beautiful and vibrant as you can in your imagination. This light is the unconditional love the Universe has for you. As you bathe in this golden energy, see yourself in the eyes of the Universe – or the God and Goddess, if you prefer. See the Universe loving you as a parent would a child, loving you just for existing, no conditions attached. Feel your heart opening to this energy. Now see the light becoming bigger and bigger, first filling the circle, and then the whole room. Take as much time as you need for this visualisation. Once you feel that the room is full of this light, open your hands, and start feeling the tiger’s eye crystal absorbing all this energy. See the golden light pouring into the crystal until it is all contained within. Once you are finished, close your circle. Keep the tiger’s eye with you, and use it to tap into the golden energy of unconditional love by holding it and meditating with it every time you feel you need a boost of confidence. Over time, you will start naturally feeling the confidence that comes from truly loving yourself unconditionally.",
            category: "Personal Growth",
            link: "http://wiccanspells.info/tigers-eye-confidence-spell/",
        },
        {
            name: "A Spell to Break a Bad Habit",
            summary: "This is a very simple candle spell that can be used to break any bad habit. This should be performed during a waning moon.",
            image: "http://wiccanspells.info/wp-content/uploads/2015/10/a-spell-to-get-rid-of-a-bad-habit-224x300.jpg",
            difficulty: 3,
            ingredients: [
                "A candle (black is the best colour for this)",
                "Pen",
                "Paper"
            ],
            instructions: "Write down the habit that you wish to be rid of on the piece of paper. Now light the candle, and stare into the flame as you clear your mind of all thought. Take the paper and burn it with the candle, while chanting: With this cleansing flame I banish you from my life So mote it be. Once you have done this, it’s time to formulate a new intent, which you will write down on another piece of paper. Make sure your new intent is positive, and written in present tense. Here are a few examples: To stop smoking: I am a healthy non-smoker To stop procrastinating: I feel motivated to get things done To stop biting your nails: My nails are healthy and strong Every morning, for the next 21 days, write down your new intent three times on a fresh piece of paper.",
            category: "Personal Growth",
            link: "http://wiccanspells.info/a-spell-to-break-a-bad-habit/",
        },
        {
            name: "A Full Moon Love Spell",
            summary: "If you want to attract love into your life, perform this spell underneath a full moon.",
            image: "http://wiccanspells.info/wp-content/uploads/2015/10/Full-moon-love-spell-wicca-300x199.jpg",
            difficulty: 3,
            ingredients: [
                "A red candle",
                "A pink candle",
                "Dried basil",
                "Ground cinnamon",
                "Two apple seeds",
                "A moonstone crystal",
                "A rose quartz crystal",
                "A red piece of cloth",
                "Pink cord or yarn"
            ],
            instructions: "Gather everything you need in your sacred space underneath the full moon, and cast your circle.  Light both your candles, and lay the red cloth in front of you.  Take the moonstone, and pass it over the flames of both candles, and then lay the crystal on the cloth.  Do the same for the rose quartz. Now take the two apple seeds, and say: By the light of the full moon, I now plant the seeds of our love. As you place the seeds on the cloth, next to the crystals, see a beautiful, soft pink energy emanating from the crystals, nourishing the seeds with loving energy.  Sprinkle the stones and seeds with the basil and cinnamon.  Lastly, pull the corners of the red cloth together, with the stones, seeds and herbs inside, and wind the pink cord around the bag three times, before tying it with three knots.  Say: So mote it be. And close your circle. Keep your charm bag close to you always in order to attract love into your life.",
            category: "Love Spells",
            link: "http://wiccanspells.info/a-full-moon-love-spell/",
        },
        {
            name: "A Spell to Find a Job",
            summary: "This is a spell which will help you attract a new job.  It is best to perform this job spell on the night of a full moon, or even during a waxing moon.",
            image: "http://wiccanspells.info/wp-content/uploads/2015/10/spell-to-find-a-job-300x199.jpg",
            difficulty: 3,
            ingredients: [
                "A brown candle",
                "A green candle",
                "A candle to represent yourself (pick your favourite colour)",
                "Prosperity oil (e.g. cinnamon, bergamot, or clove)"
            ],
            instructions: "To begin, anoint all the candles with the oil.  You will need a dedicated space for these candles, such as an altar, where they can burn out completely over the next few weeks.  Make sure the space is safe for the candles to burn out without anything catching fire. Place the brown candle in the centre of your space, the green candle on the right, and the candle representing you on the left. First, light the candle that represents you.  Think about your specific talents, and how you can use these in a job.  Think of the kind of jobs you enjoy doing, and see yourself waking up every morning, excited to go to work.  Say: I ask for change, that is my right, Open the way, clear my sight. Now light the green candle which represents prosperity.  Imagine abundance flowing to you in whichever way that feels good, and say: Luck, abundance, prosperity, Let the flow of money come to me. Finally, light the  brown candle which represents the job that is coming to you.  As you light it, know that the perfect job is out there, and that you will soon find it. Say: Opportunity, work, rewards I see, And as I will So Mote it Be. Let the candles burn for some time (anywhere between five and fifteen minutes is good), while you meditate and visualise your perfect job as if you already had it. Repeat this job spell each night until the candles burn all the way down, or until you find your new job.",
            category: "Prosperity Spells",
            link: "http://wiccanspells.info/a-spell-to-find-a-job/",
        },
        {
            name: "Herbal Love Potion",
            summary: "This herbal love potion is not meant to be drunk, but is to be worn like perfume to attract love into your life.",
            image: "http://wiccanspells.info/wp-content/uploads/2015/10/love-potion-tincture-300x238.jpg",
            difficulty: 3,
            ingredients: [
                "Brandy or vodka",
                "A glass jar",
                "Cheesecloth or muslin",
                "Red rose petals",
                "Basil",
                "Cardamom seeds",
                "Cinnamon sticks",
                "A red cloth",
                "Glass dropper bottles to store the tincture (such as this)"
            ],
            instructions: "The herbs can be fresh or dried. The quantities that you need for the love potion depend on the size of the jar – if the herbs are dried, the jar should be halfway full of herbs, if they are fresh, the jar should be three-quarters full. Try to use the same quantities of each herb if possible. This love potion should be created during a waxing moon, preferably on the first day. The tincture will be left in the jar for about a week for the herbs to soak into the alcohol. Creating the herbal love potion: Gather all your ingredients, and cast your circle. Next, put all the herbs in the red cloth and fold it up. Hold the cloth in your hands, and visualise a beautiful, pink beam of light emanating from your heart and pouring onto the red cloth, infusing the herbs. Do this for a few minutes, and then say the following: “With these sacred herbs I draw love into my life” Now put the herbs inside the glass jar, and pour the alcohol into it. Then put the lid on, hold the jar in your hands, and repeat the visualisation of pink light beaming from your heart and infusing the jar. Say the following: “As the moon grows full, so shall this love potion grow strong” Now close your circle. Leave the jar with the tincture in a cool, dark place (e.g. a kitchen cupboard) for a week or so. On the day of the full moon, strain the tincture with cheesecloth. The resulting liquid is your tincture. Store your love potion in a dark glass dropper bottle (or more than one, depending on how much tincture you have). When you want to use it to attract love, put a drop on each wrist, the same as you would with a perfume",
            category: "Love Spells",
            link: "http://wiccanspells.info/herbal-love-potion/",
        }];

    spells.forEach(function (spell) {
        SpellsService.addSpell(spell).then(function (spell) {
            addedSpells.push(spell);
        });
    });


    return addedSpells;
}