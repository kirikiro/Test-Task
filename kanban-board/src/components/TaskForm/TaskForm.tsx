import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import { Priority } from '@/interfaces/board';
import { Title2 } from '@/styles/styles';
import { Input, Textarea } from '@/styles/forms';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--gray-20);
  border-radius: 8px;
  background-color: white;
  font-family: inherit;
`;

const CharCounter = styled.div<{ $isLimit: boolean }>`
  font-size: 11px;
  text-align: right;
  margin-top: -12px;
  color: ${({ $isLimit }) => ($isLimit ? 'var(--destructive-50)' : 'var(--gray-30)')};
`;

interface ITaskFormProps {
  onSubmit: (data: { title: string; description: string; priority: Priority }) => void;
  initialData?: { title: string; description?: string; priority?: Priority }; 
  buttonText: string;
}

export const TaskForm: React.FC<ITaskFormProps> = ({ onSubmit, initialData, buttonText }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [priority, setPriority] = useState<Priority>(initialData?.priority || undefined);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    

    if (title.length <= 80 && description.length <= 150) {
      onSubmit({ title, description, priority });
    }
  }, [title, description, priority, onSubmit]);

  return (
    <>
      <Title2>{initialData ? 'Edit Task' : 'Add New Task'}</Title2>
      <Form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Input 
            placeholder="Task title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            maxLength={80}
            required 
          />
          <CharCounter $isLimit={title.length === 80}>
            {title.length}/80
          </CharCounter>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Textarea 
            placeholder="Add description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            maxLength={150}
          />
          <CharCounter $isLimit={description.length === 150}>
            {description.length}/150
          </CharCounter>
        </div>

        <Select 
          value={priority || ''} 
          onChange={(e) => setPriority(e.target.value as Priority || undefined)}
        >
          <option value="">No Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>

        <Button type="submit" fullWidth>{buttonText}</Button>
      </Form>
    </>
  );
};