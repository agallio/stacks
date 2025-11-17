import { Children } from 'react'
import { AppRegistry } from 'react-native'
import NextDocument, {
  Main,
  Html,
  Head,
  NextScript,
  type DocumentContext,
} from 'next/document'

export default class Document extends NextDocument {
  // To prevent react-native-web & nativewind styling flashing on first load.
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [getStyleElement()]

    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
