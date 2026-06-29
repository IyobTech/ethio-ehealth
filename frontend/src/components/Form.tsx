import { Fragment } from 'react';

interface FormProps {
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
  }>;
  onSubmit: (data: any) => void;
  loading?: boolean;
  submitLabel?: string;
}

export const Form = ({ fields, onSubmit, loading = false, submitLabel = 'Submit' }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <Fragment key={field.name}>
          <label className="block text-sm font-medium">{field.label}</label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              required={field.required}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              <option value="">Select...</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          )}
        </Fragment>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : submitLabel}
      </button>
    </form>
  );
};
