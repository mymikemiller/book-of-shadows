this.populateDatabase = function (SpellsService) {
    console.log("POPULATING DATABASE!");

    var addedSpells = [];
    var spells = [
        {
            name: "Rune Spell of Protection",
            summary: "This particular rune magick spell will offer protection from outside forces, but also from forces within us. We don’t always need protection from the outside, but may need a little boost in harmony within ourselves and with others around us. This spell will provide a protection barrier on all aspects.",
            image: "http://wiccanspells.info/wp-content/uploads/2017/06/rune-magick-etsy.jpg",
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
            ingredients: [
                "A golden candle",
                "Tiger’s eye or orgonite with tiger’s eye",
                "Sandalwood essential oil",
                "Clothes that are red, yellow or orange in colour (optional)"
            ],
            instructions: "Lay out all your tools in the centre of what will be your circle. Begin by meditating on what you would like the outcome of your spell to be. Be sure to be clear about your desired outcome – in what areas of life would you like more confidence? How would you like to act in future situations? The more specific you are, the better your results will be. Now cast your circle, and sit in the middle of it facing south (which corresponds to the element of Fire). Take the golden candle, and place three drops of sandalwood on it. Rub the sandalwood into the candle, while saying the following: I call upon the energies of the Sun and the Earth, To help me find my confidence and self-worth. Next, light the candle and place it in front of you. Take the tiger’s eye and cup it in your hands. Now, look into the flame, and as you do so, imagine a golden light shining down on you from above (if it helps you to visualise, you can close your eyes). Make this light as beautiful and vibrant as you can in your imagination. This light is the unconditional love the Universe has for you. As you bathe in this golden energy, see yourself in the eyes of the Universe – or the God and Goddess, if you prefer. See the Universe loving you as a parent would a child, loving you just for existing, no conditions attached. Feel your heart opening to this energy. Now see the light becoming bigger and bigger, first filling the circle, and then the whole room. Take as much time as you need for this visualisation. Once you feel that the room is full of this light, open your hands, and start feeling the tiger’s eye crystal absorbing all this energy. See the golden light pouring into the crystal until it is all contained within. Once you are finished, close your circle. Keep the tiger’s eye with you, and use it to tap into the golden energy of unconditional love by holding it and meditating with it every time you feel you need a boost of confidence. Over time, you will start naturally feeling the confidence that comes from truly loving yourself unconditionally.",
            category: "Confidence Spells",
            link: "http://wiccanspells.info/tigers-eye-confidence-spell/",
        }]
    ;

    spells.forEach(function (spell) {
        SpellsService.addSpell(spell).then(function (spell) {
            addedSpells.push(spell);
        });
    });


    return addedSpells;
}