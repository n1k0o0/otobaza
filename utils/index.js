import { Slugify } from '@/filters'
import Vue from 'vue'
const sleep = m => new Promise(resolve => setTimeout(resolve, m))
const getUrlParams = (search) => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&')
  const params = {}
  hashes.map(hash => {
    const [key, val] = hash.split('=')
    params[key] = decodeURIComponent(val)
  })
  return params
}
const serialize = (obj, prefix) => {
  const str = []
  let p
  // eslint-disable-next-line no-loops/no-loops
  for (p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      const k = prefix ? prefix + '[' + p + ']' : p
      const v = obj[p]
      let objString = ''
      if (v !== null && typeof v === 'object') {
        v.map(i => {
          objString += `${k}=${i}&`
        })
      }
      objString = objString.substring(0, objString.length - 1)
      str.push(
        v !== null && typeof v === 'object'
          ? objString
          : encodeURIComponent(k) + '=' + encodeURIComponent(v)
      )
    }
  }
  return str.join('&')
}
const useFriendlyError = (error, defaultError = 'Yenidən cəhd edin!', onClose) => {
  const errors = error?.response?.data?.errors || error?.response?.data?.message || [defaultError]
  const errorMessage = typeof errors === 'string' ? (error?.response?.data?.message || defaultError) : Object.values(errors).join('<br>')
  Vue.$swal.fire({
    position: 'center',
    toast: false,
    icon: 'error',
    timer: 5000,
    timerProgressBar: true,
    html: errorMessage,
    onClose
  })
}
const getUrlSlug = (...arg) => {
  if (!(arg[0] && arg[1])) return false
  const slug = arg[0]
  const type = arg[1]
  const matchTypes = {
    brand: /^[0-9]+/,
    model: /^[0-9]+/,
    car: /^[0-9]+/,
    part: /^(p)-([0-9]+)-([0-9]+)-([0-9]+)-([a-zA-Z0-9]+)/,
    dismantles: /^(p)-([0-9]+)/,
    assembly: /^(p)-([0-9]+)-([0-9]+)-([0-9]+)-([0-9]+)-(.*)/
  }
  // eslint-disable-next-line security/detect-object-injection
  const matches = slug.match(matchTypes[type])
  let ret = {
    // eslint-disable-next-line security/detect-object-injection
    regex: matchTypes[type],
    matches
  }
  switch (type) {
    case 'assembly': ret = {
      ...ret,
      ...{
        p: 'p',
        page: matches?.[2] || 1,
        model: +matches?.[3] || undefined,
        car: +matches?.[4] || undefined,
        assembly: +matches?.[5] || undefined,
        name: matches?.[6] || undefined
      }
    }; break
    case 'brand':
      ret = {
        ...ret,
        ...{
          manufacturer: matches?.[0]
        }
      }; break
    case 'model':
      ret = {
        ...ret,
        ...{
          model: matches?.[0]
        }
      }; break
    case 'car':
      ret = {
        ...ret,
        ...{
          car: matches?.[0]
        }
      }; break
    case 'part':
      ret = {
        ...ret,
        ...{
          p: 'p',
          page: matches?.[2] || 1,
          legacyId: matches?.[3],
          mfrid: matches?.[4],
          assemblyGroupNodeid: matches?.[5]
        }
      }; break
    case 'dismantles':
      ret = {
        ...ret,
        ...{
          p: 'p',
          page: matches?.[2] || 1
        }
      }; break
  }
  return ret
}
const setNuxtLink = (...arg) => {
  const _this = arg[0]
  const type = arg[1]
  const fromList = arg[3]

  if (type === 'brand') {
    const data = arg[2]
    return _this.localePath({
      name: 'brand-slug',
      params: {
        slug: Slugify(data?.manuId + '-' + data?.manuName)
      }
    })
  }
  if (type === 'model') {
    const data = arg[2]
    return _this.localePath({
      name: 'model-slug',
      params: {
        slug: Slugify(data?.modId + '-' + data?.ModelName)
      }
    })
  }

  if (type === 'car') {
    const data = arg[2]
    return _this.localePath({
      name: 'car-slug',
      params: {
        slug: Slugify(data?.carid + '-' + data?.carName + '-avtomobil-hisseleri')
      }
    })
  }
  if (type === 'assembly') {
    const { page, model, car, assembly, name, query } = arg[2]
    let slug = `p-${page}-${model}-${car}-${assembly}-${(name && name.includes('-masin-hisseleri') ? Slugify(name) : Slugify(name) + '-masin-hisseleri')}`
    if (fromList) {
      slug = `p-${page}-${model}-${car}-${assembly}-to-${(name && name.includes('-masin-hisseleri') ? Slugify(name) : Slugify(name) + '-masin-hisseleri')}`
    }
    return _this.localePath({
      name: 'assembly-slug',
      params: {
        slug
      },
      query: query
    })
  }
}
export {
  sleep,
  getUrlParams,
  serialize,
  useFriendlyError,
  getUrlSlug,
  setNuxtLink
}
