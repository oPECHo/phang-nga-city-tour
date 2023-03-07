export default interface Tour {
    id: number;
    attributes: {
        title: string;
        price: number;
        address: string;
        number: number;
        score: number;
        description: string;
        conditions: string;
        direction : string;
        start: Date;
        end : Date;
        image: {
            data: [
                {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: {
                            thumbnail: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;
                            }
                        };
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: any | null;
                        createdAt: string;
                        updatedAt: string;
                    }
                }
            ]
        };
        categories: {
            data: [
                {
                    id: number,
                    attributes: {
                        Type: string;
                    }
                }
            ]
        }
    };
}

