import { strict as assert } from 'node:assert'
// @ts-ignore
import { NEXT_RSC_UNION_QUERY } from 'next/dist/client/components/app-router-headers'

export default function Page({ searchParams }) {
  assert(searchParams[NEXT_RSC_UNION_QUERY] === undefined)

  return <p>no rsc query page</p>
}
