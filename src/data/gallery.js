// Frances Decor portfolio photos, served from public/images/photos/<id>.webp
// shape: 'tall' | 'wide' | undefined (standard landscape)
const raw = [
  ['couple-garden-kiss', 'couples', 'A Garden Kiss', 'tall'],
  ['forest-aisle', 'ceremony', 'Forest Aisle', 'wide'],
  ['blush-arch-vows', 'ceremony', 'Blush Arch Vows', 'wide'],
  ['seaside-drape-arch', 'ceremony', 'Seaside Drapes'],
  ['candlelit-banquet', 'reception', 'Candlelit Banquet', 'tall'],
  ['welcome-greenwall', 'details', 'Welcome Greenwall'],
  ['bride-red-bouquet', 'florals', 'Garnet Bouquet', 'tall'],
  ['bridesmaids-forest', 'couples', 'Bridesmaids in the Grove', 'tall'],
  ['evening-reception', 'reception', 'Evening Glow', 'tall'],
  ['lawn-arch', 'ceremony', 'Lawn Arch', 'tall'],
  ['candle-head-table', 'reception', 'Candlelit Head Table'],
  ['candles-red-blooms', 'florals', 'Candles & Red Blooms'],
  ['beach-aisle', 'ceremony', 'Beach Aisle'],
  ['mint-drape-corridor', 'details', 'Mint Drape Corridor'],
  ['floral-wall-couple', 'couples', 'Floral Wall Vows', 'tall'],
  ['greenery-corridor', 'details', 'Greenery Corridor', 'tall'],
  ['bride-bouquet-smile', 'florals', 'A Bride’s Smile', 'tall'],
  ['floral-doorway-exit', 'couples', 'Through the Doorway'],
  ['greenery-lounge', 'reception', 'Greenery Lounge'],
  ['monstera-tablescape', 'reception', 'Monstera Tablescape'],
  ['couple-teal-suit', 'couples', 'Laughter at Dusk', 'tall'],
  ['couple-champagne', 'couples', 'Champagne Tones', 'tall'],
  ['white-orchid-bouquet', 'florals', 'White Orchid Bouquet', 'tall'],
  ['bride-white-bouquet', 'florals', 'Ivory Cascade'],
  ['garden-table-florals', 'reception', 'Garden Table'],
  ['chiavari-florals', 'reception', 'Chiavari & Blooms', 'tall'],
  ['glasshouse-sign', 'details', 'Glasshouse Welcome'],
  ['ivory-rose-bouquet', 'florals', 'Ivory Roses'],
  ['chapel-altar-florals', 'ceremony', 'Chapel Altar'],
  ['white-floral-curtain', 'details', 'Floral Curtain', 'tall'],
  ['greenery-head-table', 'reception', 'Greenery Head Table'],
  ['sunset-aisle', 'ceremony', 'Sunset Aisle', 'wide'],
  ['blossom-tree-centerpiece', 'reception', 'Blossom Tree'],
  ['long-tables-trees', 'reception', 'Long Tables'],
  ['wooden-altar', 'ceremony', 'Wooden Altar'],
  ['garland-backdrop', 'details', 'Garland Backdrop'],
  ['drape-floral-arch', 'ceremony', 'Draped Floral Arch'],
  ['gold-welcome-sign', 'details', 'Gold Welcome'],
  ['white-head-table', 'reception', 'White Head Table'],
  ['cathedral-altar', 'ceremony', 'Cathedral Altar', 'tall'],
  ['crystal-curtain', 'details', 'Crystal Curtain'],
  ['couple-portrait', 'couples', 'Just Married'],
  ['candle-centerpiece', 'florals', 'Candle Centrepiece', 'tall'],
  ['circle-arch-sunset', 'ceremony', 'Moon Arch at Sunset'],
  ['candlelit-church-aisle', 'ceremony', 'Candlelit Aisle'],
  ['blue-hydrangea-centerpiece', 'florals', 'Something Blue'],
]

export const gallery = raw.map(([file, category, title, shape]) => ({
  id: file,
  src: `/images/photos/${file}.webp`,
  category,
  title,
  shape,
}))

const byId = Object.fromEntries(gallery.map((g) => [g.id, g]))

// Look up a photo URL by id; throws on a typo so a broken image shows up in dev.
export const img = (id) => {
  if (!byId[id]) throw new Error(`Unknown photo: ${id}`)
  return byId[id].src
}

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'ceremony', label: 'Ceremonies' },
  { id: 'reception', label: 'Receptions' },
  { id: 'florals', label: 'Florals' },
  { id: 'details', label: 'Details' },
  { id: 'couples', label: 'Couples' },
]
