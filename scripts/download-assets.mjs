import { mkdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

const imageUrls = [
  'https://framerusercontent.com/images/3qm2Mof2cqd4tANUTj9dgI6js.png',
  {
    url: 'https://framerusercontent.com/images/4SC13C3XcBANtkONRYcfz8v6fzg.svg',
    name: 'skater.svg',
  },
  'https://framerusercontent.com/images/7goIYE6dQXbxeylHDxe3fems.svg',
  'https://framerusercontent.com/images/BDMoE666gzsgqIoOX9Xy0O9vhqo.png',
  'https://framerusercontent.com/images/Bho1L9RlaE9jYDOgWEarnx2QG88.svg',
  'https://framerusercontent.com/images/bLf8KZjMtM5XUsNvFeoNAN04ZE.png',
  'https://framerusercontent.com/images/cqFBGvZE9kp806YQtsVqtF3WAOQ.png',
  'https://framerusercontent.com/images/qTD6HVWX2kKHX7RXKJxyzPQUBNA.svg',
  'https://framerusercontent.com/images/eyLX4foZDsM7ZsEBePePR6HPdiQ.svg',
  'https://framerusercontent.com/images/ns8AQym3lp3rqDTsbChEIOdQk8.svg',
  'https://framerusercontent.com/images/dG7kI20mt8ZcYKMARV4koIbO0.png',
  'https://framerusercontent.com/images/EUcqnFDUlBdKv1qenIR9hU9m5aY.svg',
  'https://framerusercontent.com/images/FmgH6YM38cLt1T9YVNa2S004cOY.svg',
  'https://framerusercontent.com/images/g090Y2s7VhTUW0F8hiNWJiHww.svg',
  'https://framerusercontent.com/images/Hlo9AOaa3IcQeZ95CoTeqoP8.svg',
  'https://framerusercontent.com/images/hmi0rSLqCkdx8s0TTP42jsg5HHc.svg',
  'https://framerusercontent.com/images/i5AvNV4ZGhLmsBlWCJBkjwzJvI.png',
  'https://framerusercontent.com/images/jr4rfBCvg24K2RbSNlFsTUX9LBw.png',
  'https://framerusercontent.com/images/KCl6aTKrzaPJN36ljHgo3gpCB4.svg',
  'https://framerusercontent.com/images/KqcqksmaFjmzK9EAc1zwbdseo6o.png',
  'https://framerusercontent.com/images/kXZHO9vv40wgsDqtozi1C5bF5Cg.png',
  'https://framerusercontent.com/images/Ld8uU8jv3q0t5cP9ZRSc709jzo.svg',
  'https://framerusercontent.com/images/lNRANB0m8vMm8xQzk9vAwflvLw.svg',
  'https://framerusercontent.com/images/LrnWyQrZOEEexmI4L4ZgVFsU.svg',
  'https://framerusercontent.com/images/nJ3c2LS60AUN9mU8paK7hWYIwOI.svg',
  'https://framerusercontent.com/images/nvIt6mHlUyr5kU7vUIKEF1Qs.png',
  'https://framerusercontent.com/images/Pmefwe75InjCPJzpju52a8iPyQ.svg',
  'https://framerusercontent.com/images/qNgNaYpuyAcE2k3pX7rDJdS0Oo.svg',
  'https://framerusercontent.com/images/QNnasYHVez6btgGkjRLkmoiS8.svg',
  'https://framerusercontent.com/images/U3OnGtwOS595rdTGDvPZdu5uiMI.png',
  'https://framerusercontent.com/images/v8nOqeEKUoxJWcWz47vKCRcRQR0.svg',
  'https://framerusercontent.com/images/Z7k0XXv2laRlLbwWfVNbnjourgs.svg',
]

const fontUrls = [
  {
    url: 'https://framerusercontent.com/assets/sOTTsVvDD2SUkXxVEqQBqUBX7Gg.woff2',
    name: 'PPSupplySans-Regular.woff2',
  },
]

async function download(entry, destDir) {
  const url = typeof entry === 'string' ? entry : entry.url
  const name = typeof entry === 'string' ? basename(url.split('?')[0]) : entry.name
  const dest = join(destDir, name)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(dest, buf)
  console.log('saved', name)
  return `/src/assets/${destDir.endsWith('fonts') ? 'fonts' : 'images'}/${name}`
}

await mkdir(join(root, 'src/assets/images'), { recursive: true })
await mkdir(join(root, 'src/assets/fonts'), { recursive: true })

for (const entry of imageUrls) {
  await download(entry, join(root, 'src/assets/images'))
}

for (const { url, name } of fontUrls) {
  const dest = join(root, 'src/assets/fonts', name)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`)
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  console.log('saved', name)
}

console.log('Done.')
