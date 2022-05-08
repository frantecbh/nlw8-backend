
export interface FeedBackProps {

    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbackRepository {
    create: (data: FeedBackProps) => Promise<void>;
}