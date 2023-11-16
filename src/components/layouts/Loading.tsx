import { EuiLoadingElastic, EuiOverlayMask } from '@elastic/eui'

export default function PageLoading() {
  return (
    <>
      <EuiOverlayMask>
        <EuiLoadingElastic size='xxl' />
      </EuiOverlayMask>
    </>
  )
}
