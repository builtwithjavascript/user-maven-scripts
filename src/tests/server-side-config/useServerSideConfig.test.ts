import { useUserMavenScripts } from '@/user-maven-scripts/'

describe('useUserMavenScripts', () => {
  it(`should return an array with the 2 script sections`, () => {
    const userMavenKey = 'your-usermaven-key'
    const results = useUserMavenScripts(userMavenKey)
    expect(results).toBeDefined()

    // first script
    expect(results.length).toEqual(2)

    // first result
    const result1 = results[0] as any
    expect(result1.src).toEqual('https://t.usermaven.com/lib.js')
    expect(result1['data-tracking-host']).toEqual('https://events.usermaven.com')
    expect(result1['data-key']).toEqual(userMavenKey)

    // second result
    const result2 = results[1] as any
    expect(result2.type).toEqual('text/javascript')
    expect(result2.innerHTML).toEqual('window.usermaven = window.usermaven || (function(){(window.usermavenQ = window.usermavenQ || []).push(arguments);});')
  })
})
