// 游戏网站数据和逻辑
const gameData = {
    searchTerm: '',
    activeCategory: 'all',
    
    // 游戏数据数组 - 包含所有游戏
    games: [
        { 
            title: 'Train Miner', 
            url: 'https://play.famobi.com/train-miner', 
            category: 'puzzle',
            theme: 'trains',
            description: 'Control your train and collect resources in this addictive puzzle adventure.'
        },
        { 
            title: 'Rise Up', 
            url: 'https://play.famobi.com/rise-up', 
            category: 'arcade',
            theme: 'casual',
            description: 'Protect the balloon from obstacles as it rises higher and higher.'
        },
        { 
            title: 'Giant Rush', 
            url: 'https://play.famobi.com/giant-rush', 
            category: 'action',
            theme: 'running',
            description: 'Grow bigger as you run through obstacles and collect power-ups.'
        },
        { 
            title: 'Western Sniper', 
            url: 'https://play.famobi.com/western-sniper', 
            category: 'shooting',
            theme: 'cowboy',
            description: 'Test your aim in this wild west themed shooting gallery.'
        },
        { 
            title: 'Go Escape', 
            url: 'https://play.famobi.com/go-escape', 
            category: 'puzzle',
            theme: 'escape',
            description: 'Find your way through challenging mazes and obstacles.'
        },
        { 
            title: 'Color Fill 3D', 
            url: 'https://play.famobi.com/color-fill-3d', 
            category: 'puzzle',
            theme: 'color',
            description: 'Fill the board with colors in this relaxing 3D puzzle game.'
        },
        { 
            title: 'Spot the Cat', 
            url: 'https://play.famobi.com/spot-the-cat', 
            category: 'puzzle',
            theme: 'animals',
            description: 'Find the hidden cats in increasingly challenging scenes.'
        },
        { 
            title: 'Color Roll 3D', 
            url: 'https://play.famobi.com/color-roll-3d', 
            category: 'arcade',
            theme: 'color',
            description: 'Roll and match colors in this challenging 3D arcade game.'
        },
        { 
            title: 'Color Water Sort 3D', 
            url: 'https://play.famobi.com/color-water-sort-3d', 
            category: 'puzzle',
            theme: 'color',
            description: 'Sort the colored water by pouring between containers.'
        },
        { 
            title: 'Braindom', 
            url: 'https://play.famobi.com/braindom', 
            category: 'puzzle',
            theme: 'brain',
            description: 'Test your wits with a collection of brain-teasing puzzles.'
        },
        { 
            title: 'Sort It', 
            url: 'https://play.famobi.com/sort-it', 
            category: 'puzzle',
            theme: 'sorting',
            description: 'Sort different colored balls into their matching tubes.'
        },
        { 
            title: 'Parking Jam', 
            url: 'https://play.famobi.com/parking-jam', 
            category: 'puzzle',
            theme: 'cars',
            description: 'Solve parking puzzles by moving cars out of the way.'
        },
        { 
            title: 'Fashion Battle', 
            url: 'https://play.famobi.com/fashion-battle', 
            category: 'casual',
            theme: 'fashion',
            description: 'Compete in fashion battles and create stylish outfits.'
        },
        { 
            title: 'Fruit Party', 
            url: 'https://play.famobi.com/fruit-party', 
            category: 'match3',
            theme: 'fruits',
            description: 'Match delicious fruits in this colorful party game.'
        },
        { 
            title: 'Thief Puzzle', 
            url: 'https://play.famobi.com/thief-puzzle', 
            category: 'puzzle',
            theme: 'adventure',
            description: 'Help the thief navigate through challenging puzzles.'
        },
        { 
            title: 'Guess Their Answer', 
            url: 'https://play.famobi.com/guess-their-answer', 
            category: 'quiz',
            theme: 'social',
            description: 'Test how well you know your friends by guessing their answers.'
        },
        { 
            title: 'Neon Rider', 
            url: 'https://play.famobi.com/neon-rider', 
            category: 'racing',
            theme: 'neon',
            description: 'Race through neon-lit tracks in this fast-paced driving game.'
        },
        { 
            title: 'Speed Master', 
            url: 'https://play.famobi.com/speed-master', 
            category: 'racing',
            theme: 'speed',
            description: 'Push your racing skills to the limit in this speed challenge.'
        },
        { 
            title: 'Alien Attack', 
            url: 'https://play.famobi.com/alien-attack', 
            category: 'shooting',
            theme: 'space',
            description: 'Defend Earth from invading aliens in this action-packed shooter.'
        },
        { 
            title: 'Peet Sneak', 
            url: 'https://play.famobi.com/peet-sneak', 
            category: 'stealth',
            theme: 'adventure',
            description: 'Sneak around obstacles and avoid detection in this stealth game.'
        },
        { 
            title: 'Cut the Rope', 
            url: 'https://play.famobi.com/cut-the-rope', 
            category: 'puzzle',
            theme: 'physics',
            description: 'Cut ropes strategically to feed candy to Om Nom.'
        },
        { 
            title: 'Toilet Run', 
            url: 'https://play.famobi.com/toilet-run', 
            category: 'arcade',
            theme: 'funny',
            description: 'A silly arcade game with a toilet-themed adventure.'
        },
        { 
            title: 'Pair Up 3D', 
            url: 'https://play.famobi.com/pair-up-3d', 
            category: 'matching',
            theme: '3d',
            description: 'Match pairs of cards in this 3D memory game.'
        },
        { 
            title: 'Cowboy Swing', 
            url: 'https://play.famobi.com/cowboy-swing', 
            category: 'arcade',
            theme: 'western',
            description: 'Swing your cowboy through the wild west, avoiding obstacles.'
        },
        { 
            title: 'Go Around', 
            url: 'https://play.famobi.com/go-around', 
            category: 'arcade',
            theme: 'casual',
            description: 'Navigate through increasingly difficult circular mazes.'
        },
        { 
            title: 'Green Ball', 
            url: 'https://play.famobi.com/green-ball', 
            category: 'puzzle',
            theme: 'physics',
            description: 'Guide the green ball through physics-based puzzle levels.'
        },
        { 
            title: 'Twisty Lines', 
            url: 'https://play.famobi.com/twisty-lines', 
            category: 'puzzle',
            theme: 'lines',
            description: 'Connect twisty lines in this brain-teasing puzzle game.'
        },
        { 
            title: 'Lawn Mower', 
            url: 'https://play.famobi.com/lawn-mower', 
            category: 'simulation',
            theme: 'gardening',
            description: 'Mow lawns perfectly in this oddly satisfying simulation game.'
        },
        { 
            title: 'Rising Squares', 
            url: 'https://play.famobi.com/rising-squares', 
            category: 'arcade',
            theme: 'geometry',
            description: 'Navigate through rising squares and avoid obstacles.'
        },
        { 
            title: 'Tower Fall', 
            url: 'https://play.famobi.com/tower-fall', 
            category: 'arcade',
            theme: 'tower',
            description: 'Destroy towers by aiming and shooting at the right moment.'
        },
        { 
            title: 'Emoji Fun', 
            url: 'https://play.famobi.com/emoji-fun', 
            category: 'casual',
            theme: 'emoji',
            description: 'Have fun with emojis in this casual and entertaining game.'
        },
        { 
            title: 'Bottle Flip', 
            url: 'https://play.famobi.com/bottle-flip', 
            category: 'skill',
            theme: 'challenge',
            description: 'Master the art of bottle flipping in this addictive skill game.'
        },
        { 
            title: 'Slime Road', 
            url: 'https://play.famobi.com/slime-road', 
            category: 'arcade',
            theme: 'slime',
            description: 'Navigate your slime down a treacherous road of obstacles.'
        },
        { 
            title: 'Pipe Puzzle', 
            url: 'https://play.famobi.com/pipe-puzzle', 
            category: 'puzzle',
            theme: 'pipes',
            description: 'Connect pipes to create a path for the water to flow.'
        },
        { 
            title: 'Funny Fred', 
            url: 'https://play.famobi.com/funny-fred', 
            category: 'platformer',
            theme: 'funny',
            description: 'Help Fred navigate through funny platform challenges.'
        },
        { 
            title: 'Barbara and Kent', 
            url: 'https://play.famobi.com/barbara-and-kent', 
            category: 'adventure',
            theme: 'romance',
            description: 'Join Barbara and Kent on their romantic adventure.'
        },
        { 
            title: 'Parking Panic', 
            url: 'https://play.famobi.com/parking-panic', 
            category: 'puzzle',
            theme: 'parking',
            description: 'Solve challenging parking puzzles in tight spaces.'
        },
        { 
            title: 'Super Thooker', 
            url: 'https://play.famobi.com/super-thooker', 
            category: 'sports',
            theme: 'billiards',
            description: 'Play snooker with supercharged physics and special effects.'
        },
        { 
            title: 'Food Rush', 
            url: 'https://play.famobi.com/food-rush', 
            category: 'time-management',
            theme: 'food',
            description: 'Serve food quickly in this fast-paced restaurant game.'
        },
        { 
            title: 'Parking Rush', 
            url: 'https://play.famobi.com/parking-rush', 
            category: 'puzzle',
            theme: 'parking',
            description: 'Park cars quickly before time runs out in this rush challenge.'
        },
        { 
            title: 'Gun Spin', 
            url: 'https://play.famobi.com/gun-spin', 
            category: 'action',
            theme: 'western',
            description: 'Test your reflexes in this wild west gun spinning game.'
        },
        { 
            title: 'Giant Attack', 
            url: 'https://play.famobi.com/giant-attack', 
            category: 'action',
            theme: 'giants',
            description: 'Defend your city from giant monsters in this action game.'
        },
        { 
            title: 'Good Shelves', 
            url: 'https://play.famobi.com/good-shelves', 
            category: 'puzzle',
            theme: 'storage',
            description: 'Organize items on shelves in this satisfying puzzle game.'
        },
        { 
            title: 'Crazy Hen Level', 
            url: 'https://play.famobi.com/crazy-hen-level', 
            category: 'arcade',
            theme: 'farm',
            description: 'Help the crazy hen navigate through challenging levels.'
        },
        { 
            title: 'Dance Battle', 
            url: 'https://play.famobi.com/dance-battle', 
            category: 'rhythm',
            theme: 'dance',
            description: 'Compete in dance battles with rhythm-based gameplay.'
        },
        { 
            title: 'Tile Journey', 
            url: 'https://play.famobi.com/tile-journey', 
            category: 'puzzle',
            theme: 'tiles',
            description: 'Embark on a journey through challenging tile-based puzzles.'
        },
        { 
            title: 'Love Tester', 
            url: 'https://play.famobi.com/love-tester', 
            category: 'casual',
            theme: 'love',
            description: 'Test the compatibility between two people in this fun love game.'
        },
        { 
            title: 'Emoji Match', 
            url: 'https://play.famobi.com/emoji-match', 
            category: 'match3',
            theme: 'emoji',
            description: 'Match emojis in this colorful and fun matching game.'
        },
        { 
            title: 'Tower Smash Level', 
            url: 'https://play.famobi.com/tower-smash-level', 
            category: 'arcade',
            theme: 'tower',
            description: 'Smash towers level by level in this destructive arcade game.'
        },
        { 
            title: 'Tower Smash', 
            url: 'https://play.famobi.com/tower-smash', 
            category: 'arcade',
            theme: 'tower',
            description: 'Smash towers and watch them crumble in this satisfying game.'
        },
        { 
            title: 'Save the Princess', 
            url: 'https://play.famobi.com/save-the-princess', 
            category: 'puzzle',
            theme: 'fantasy',
            description: 'Solve puzzles to save the princess from danger.'
        },
        { 
            title: 'Peet a Lock', 
            url: 'https://play.famobi.com/peet-a-lock', 
            category: 'puzzle',
            theme: 'locks',
            description: 'Unlock complex locks using logic and problem-solving skills.'
        },
        { 
            title: 'Pengu Slide', 
            url: 'https://play.famobi.com/pengu-slide', 
            category: 'arcade',
            theme: 'penguin',
            description: 'Slide with penguins through icy challenges and obstacles.'
        },
        { 
            title: 'Peet Around', 
            url: 'https://play.famobi.com/peet-around', 
            category: 'adventure',
            theme: 'exploration',
            description: 'Explore the world with Peet in this adventure game.'
        },
        { 
            title: 'Words of Wonders', 
            url: 'https://play.famobi.com/words-of-wonders', 
            category: 'word',
            theme: 'vocabulary',
            description: 'Form words and solve puzzles in this vocabulary game.'
        },
        { 
            title: 'Emoji Flow', 
            url: 'https://play.famobi.com/emoji-flow', 
            category: 'puzzle',
            theme: 'emoji',
            description: 'Connect emoji paths in this flow puzzle game.'
        },
        { 
            title: 'Neon Swing', 
            url: 'https://play.famobi.com/neon-swing', 
            category: 'arcade',
            theme: 'neon',
            description: 'Swing through neon obstacles in this vibrant arcade game.'
        },
        { 
            title: 'Neon Tower', 
            url: 'https://play.famobi.com/neon-tower', 
            category: 'arcade',
            theme: 'neon',
            description: 'Climb the neon tower while avoiding obstacles.'
        },
        { 
            title: 'Drift Dudes', 
            url: 'https://play.famobi.com/drift-dudes', 
            category: 'racing',
            theme: 'drifting',
            description: 'Master the art of drifting in this high-speed racing game.'
        },
        { 
            title: 'Slope', 
            url: 'https://play.famobi.com/slope', 
            category: 'arcade',
            theme: '3d',
            description: 'Navigate a ball down a steep and treacherous slope.'
        },
        { 
            title: 'Cubito', 
            url: 'https://play.famobi.com/cubito', 
            category: 'puzzle',
            theme: 'cubes',
            description: 'Solve cube-based puzzles with strategic moves.'
        },
        { 
            title: 'Tap Tap Dunk', 
            url: 'https://play.famobi.com/tap-tap-dunk', 
            category: 'sports',
            theme: 'basketball',
            description: 'Dunk basketballs with perfect timing and precision.'
        },
        { 
            title: 'Ramp', 
            url: 'https://play.famobi.com/ramp', 
            category: 'racing',
            theme: 'stunt',
            description: 'Perform stunts on ramps with various vehicles.'
        },
        { 
            title: 'Diamond Rush 2', 
            url: 'https://play.famobi.com/diamond-rush-2', 
            category: 'puzzle',
            theme: 'diamonds',
            description: 'Collect diamonds in this exciting puzzle adventure sequel.'
        },
        { 
            title: 'Color Tunnel', 
            url: 'https://play.famobi.com/color-tunnel', 
            category: 'arcade',
            theme: 'color',
            description: 'Navigate through a colorful tunnel, avoiding obstacles.'
        },
        { 
            title: 'Butterfly Shimai', 
            url: 'https://play.famobi.com/butterfly-shimai', 
            category: 'puzzle',
            theme: 'butterfly',
            description: 'Match butterflies in this peaceful and relaxing puzzle game.'
        },
        { 
            title: 'E-Scooter', 
            url: 'https://play.famobi.com/e-scooter', 
            category: 'racing',
            theme: 'scooter',
            description: 'Ride an electric scooter through city obstacles and challenges.'
        },
        { 
            title: 'Pop It Duel', 
            url: 'https://play.famobi.com/pop-it-duel', 
            category: 'casual',
            theme: 'fidget',
            description: 'Compete in a pop it fidget toy duel against an opponent.'
        },
        { 
            title: 'Stair Race 3D', 
            url: 'https://play.famobi.com/stair-race-3d', 
            category: 'racing',
            theme: '3d',
            description: 'Race up stairs in this challenging 3D obstacle course.'
        },
        { 
            title: 'Crowd Run 3D', 
            url: 'https://play.famobi.com/crowd-run-3d', 
            category: 'action',
            theme: 'crowd',
            description: 'Control a crowd running through 3D obstacle courses.'
        },
        { 
            title: 'Uncle Ahmed', 
            url: 'https://play.famobi.com/uncle-ahmed', 
            category: 'adventure',
            theme: 'story',
            description: 'Join Uncle Ahmed on an exciting adventure with unique puzzles.'
        },
        { 
            title: 'Dices 2048 3D', 
            url: 'https://play.famobi.com/dices-2048-3d', 
            category: 'puzzle',
            theme: 'dice',
            description: 'Combine dice numbers in this 3D version of 2048.'
        },
        { 
            title: 'Frankenstein Go', 
            url: 'https://play.famobi.com/frankenstein-go', 
            category: 'arcade',
            theme: 'horror',
            description: 'Help Frankenstein\'s monster navigate through challenging levels.'
        },
        { 
            title: 'Om Nom Connect Classic', 
            url: 'https://play.famobi.com/om-nom-connect-classic', 
            category: 'puzzle',
            theme: 'connect',
            description: 'Connect paths to help Om Nom reach his candy.'
        },
        { 
            title: 'Om Nom Bubbles', 
            url: 'https://play.famobi.com/om-nom-bubbles', 
            category: 'arcade',
            theme: 'bubbles',
            description: 'Pop colorful bubbles with Om Nom in this fun arcade game.'
        },
        { 
            title: 'Pop It 3D', 
            url: 'https://play.famobi.com/pop-it-3d', 
            category: 'casual',
            theme: 'fidget',
            description: 'Experience the satisfaction of popping fidget toys in 3D.'
        },
        { 
            title: 'Traffic Tom', 
            url: 'https://play.famobi.com/traffic-tom', 
            category: 'puzzle',
            theme: 'traffic',
            description: 'Manage traffic flow to prevent accidents and jams.'
        },
        { 
            title: 'Onet Gallery 3D', 
            url: 'https://play.famobi.com/onet-gallery-3d', 
            category: 'matching',
            theme: '3d',
            description: 'Match pairs of identical tiles in this 3D matching game.'
        },
        { 
            title: 'Om Nom Run', 
            url: 'https://play.famobi.com/om-nom-run', 
            category: 'runner',
            theme: 'endless',
            description: 'Run with Om Nom in this endless runner adventure.'
        },
        { 
            title: 'Euro Penalty Cup 2021', 
            url: 'https://play.famobi.com/euro-penalty-cup-2021', 
            category: 'sports',
            theme: 'soccer',
            description: 'Compete in penalty shootouts in this European football game.'
        },
        { 
            title: 'Train 2048', 
            url: 'https://play.famobi.com/train-2048', 
            category: 'puzzle',
            theme: 'trains',
            description: 'Combine trains with the same number in this 2048 variant.'
        },
        { 
            title: 'Giant 2048', 
            url: 'https://play.famobi.com/giant-2048', 
            category: 'puzzle',
            theme: 'numbers',
            description: 'Play a giant version of the classic 2048 puzzle game.'
        },
        { 
            title: 'Fuzzies', 
            url: 'https://play.famobi.com/fuzzies', 
            category: 'puzzle',
            theme: 'cute',
            description: 'Match and connect fuzzy creatures in this adorable puzzle game.'
        },
        { 
            title: 'Garden Bloom', 
            url: 'https://play.famobi.com/garden-bloom', 
            category: 'puzzle',
            theme: 'garden',
            description: 'Make your garden bloom by solving plant-based puzzles.'
        },
        { 
            title: 'Brain Trainer', 
            url: 'https://play.famobi.com/brain-trainer', 
            category: 'educational',
            theme: 'brain',
            description: 'Train your brain with various mental exercises and challenges.'
        },
        { 
            title: 'Garden Match 3D', 
            url: 'https://play.famobi.com/garden-match-3d', 
            category: 'match3',
            theme: 'garden',
            description: 'Match garden items in this 3D match-3 puzzle game.'
        },
        { 
            title: 'Pull Pins', 
            url: 'https://play.famobi.com/pull-pins', 
            category: 'puzzle',
            theme: 'pins',
            description: 'Pull pins strategically to solve challenging puzzles.'
        }
    ],
    
    // 所有游戏分类
    categories: [
        'all', 'puzzle', 'arcade', 'action', 'shooting', 'racing', 'sports', 
        'casual', 'match3', 'educational', 'word', 'strategy', 'adventure', 
        'platformer', 'rhythm', 'stealth', 'simulation', 'skill', 'matching', 
        'time-management', 'runner'
    ],
    
    // 所有游戏主题
    themes: [
        'all', 'color', 'animals', 'trains', 'casual', 'running', 'cowboy', 
        'escape', 'brain', 'sorting', 'cars', 'fashion', 'fruits', 'adventure', 
        'social', 'neon', 'speed', 'space', 'physics', 'funny', '3d', 'western', 
        'geometry', 'tower', 'emoji', 'challenge', 'slime', 'pipes', 'romance', 
        'parking', 'billiards', 'food', 'giants', 'storage', 'farm', 'dance', 
        'tiles', 'love', 'fantasy', 'locks', 'penguin', 'exploration', 'vocabulary', 
        'drifting', 'cubes', 'basketball', 'stunt', 'diamonds', 'butterfly', 
        'scooter', 'fidget', 'crowd', 'story', 'dice', 'horror', 'connect', 
        'bubbles', 'traffic', 'endless', 'soccer', 'numbers', 'cute', 'garden', 'pins'
    ],
    
    // 过滤游戏的计算属性
    get filteredGames() {
        let filtered = this.games;
        
        if (this.activeCategory !== 'all') {
            filtered = filtered.filter(game => game.category === this.activeCategory);
        }
        
        if (this.searchTerm.trim() !== '') {
            const searchLower = this.searchTerm.toLowerCase();
            filtered = filtered.filter(game => 
                game.title.toLowerCase().includes(searchLower) || 
                game.description.toLowerCase().includes(searchLower) ||
                game.category.toLowerCase().includes(searchLower) ||
                game.theme.toLowerCase().includes(searchLower)
            );
        }
        
        return filtered;
    },
    
    // 设置当前活动分类
    setCategory(category) {
        this.activeCategory = category;
    },

    // 获取特定分类的游戏数量
    getCategoryCount(category) {
        return this.games.filter(game => game.category === category).length;
    },
    
    // 获取特定主题的游戏数量
    getThemeCount(theme) {
        return this.games.filter(game => game.theme === theme).length;
    }
};

// 提供数据给Alpine.js应用
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => gameData);
});
