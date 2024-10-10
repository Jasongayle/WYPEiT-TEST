import React, { useState, Fragment } from 'react'
import { Loader, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react'
import { Listbox, Transition } from '@headlessui/react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const FreeTool: React.FC = () => {
  const [platform, setPlatform] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      const prompt = `Provide detailed account management instructions for ${platform}, including how to backup data and delete the account. Include important notes about the process and post-deletion security measures.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setResult(text);
    } catch (error) {
      console.error('Error generating content:', error);
      setResult('An error occurred while generating the instructions. Please try again later.');
    } finally {
      setIsLoading(false)
    }
  }

  const platforms = [
    'App.net', 'Clubhouse', 'Discord', 'Facebook', 'Flickr', 'Gab', 'Instagram', 'LinkedIn',
    'Mastodon', 'Meetup', 'Myspace', 'Parler', 'Pinterest', 'Reddit', 'Signal', 'Snapchat',
    'Telegram', 'TikTok', 'Tumblr', 'Twitter (now X)', 'Vero', 'WeChat', 'WhatsApp', 'YouTube'
  ]

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Listbox value={platform} onChange={setPlatform}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm">
                <span className="block truncate">{platform || 'Select a platform'}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {platforms.map((p) => (
                    <Listbox.Option
                      key={p}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                        }`
                      }
                      value={p}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {p}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                              <CheckCircle className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <button
          type="submit"
          className="w-full bg-primary-500 text-white py-3 px-4 rounded-md hover:bg-primary-600 transition duration-300 flex items-center justify-center"
          disabled={isLoading || !platform}
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin mr-2" />
              Generating Instructions...
            </>
          ) : (
            'Get Account Management Instructions'
          )}
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            Instructions Generated
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800">{result}</pre>
          </div>
          <div className="mt-4 flex items-center text-yellow-600">
            <AlertCircle className="mr-2" />
            <p className="text-sm">Always proceed with caution when managing your accounts.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default FreeTool