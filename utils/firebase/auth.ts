import { getAuth, OAuthProvider } from 'firebase/auth'

const provider = new OAuthProvider('microsoft.com')

const azure_ad_tenant = process.env.NEXT_PUBLIC_AZURE_AD_TENANT

if (!azure_ad_tenant) {
  throw new Error('NEXT_PUBLIC_AZURE_AD_TENANT is not set')
}

provider.setCustomParameters({
  tenant: azure_ad_tenant,
})

provider.addScope('mail.read')
provider.addScope('openid')
provider.addScope('profile')
provider.addScope('offline_access')

const auth = getAuth()

export { auth, provider }
