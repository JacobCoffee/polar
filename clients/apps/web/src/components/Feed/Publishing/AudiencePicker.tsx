import { ArticleUpdate } from '@polar-sh/sdk'
import { FormField, FormItem, FormMessage } from 'polarkit/components/ui/form'
import { Label } from 'polarkit/components/ui/label'
import { RadioGroup, RadioGroupItem } from 'polarkit/components/ui/radio-group'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export const AudiencePicker = () => {
  const { control } = useFormContext<ArticleUpdate>()

  return (
    <FormField
      control={control}
      name="paid_subscribers_only"
      render={({ field }) => {
        const audience = field.value ? 'premium-subscribers' : 'all-subscribers'

        return (
          <FormItem>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <span className="font-medium">Audience</span>
                <p className="text-polar-500 dark:text-polar-500 text-sm">
                  Pick which audience you want to publish this post to
                </p>
              </div>
              <RadioGroup
                value={audience}
                onValueChange={(v) =>
                  field.onChange(v === 'premium-subscribers')
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="all-subscribers"
                    id="all-subscribers"
                  />
                  <Label
                    className={twMerge('capitalize')}
                    htmlFor="all-subscribers"
                  >
                    All Subscribers
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="premium-subscribers"
                    id="premium-subscribers"
                  />
                  <Label
                    className={twMerge('capitalize')}
                    htmlFor="premium-subscribers"
                  >
                    Premium Subscribers
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
