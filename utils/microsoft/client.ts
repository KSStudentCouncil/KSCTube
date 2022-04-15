import { Client } from '@microsoft/microsoft-graph-client'
export class MicrosoftClient {
  clientId = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID
  clientSecret = process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET
  tenantId = process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID

  client: Client

  constructor(accessToken: string) {
    this.client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async (): Promise<string> => {
          return accessToken
        },
      },
    })
  }

  getUserProfilePhoto: () => Promise<Blob> = async () => {
    const user = await this.client.api('/me/photo/$value').get()
    return user
  }
}
